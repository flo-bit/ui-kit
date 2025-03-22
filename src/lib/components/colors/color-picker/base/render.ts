import { f_shader, v_shader } from './shaders';
import { picker_size, slider_width } from './constants';
import { okhsl_to_rgb } from './color';

export function render_slider_image(canvas: HTMLCanvasElement) {
	const ctx = canvas.getContext('2d')!;
	const data = new Uint8ClampedArray(picker_size * slider_width * 4);

	for (let i = 0; i < picker_size; i++) {
		const a_ = Math.cos((2 * Math.PI * i) / picker_size);
		const b_ = Math.sin((2 * Math.PI * i) / picker_size);

		const rgb = okhsl_to_rgb({
			h: (i / picker_size) * 360,
			s: 0.9,
			l: 0.65 + 0.17 * b_ - 0.08 * a_
		});

		for (let j = 0; j < slider_width; j++) {
			const index = 4 * (i * slider_width + j);
			data[index + 0] = rgb.r * 255;
			data[index + 1] = rgb.g * 255;
			data[index + 2] = rgb.b * 255;
			data[index + 3] = 255;
		}
	}

	const imageData = new ImageData(data, slider_width);
	ctx.putImageData(imageData, 0, 0);
}

export function render_main_image(canvas: HTMLCanvasElement, hue: number) {
	const gl = canvas.getContext('webgl')!;

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

	const shaderProgram = initShaderProgram(gl, v_shader, f_shader)!;

	const position = gl.getAttribLocation(shaderProgram, 'position');
	const resolution = gl.getUniformLocation(shaderProgram, 'resolution');
	const hue_rad = gl.getUniformLocation(shaderProgram, 'hue_rad');

	gl.useProgram(shaderProgram);
	gl.uniform2fv(resolution, [gl.canvas.width, gl.canvas.height]);

	const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
	const positionBuffer = gl.createBuffer();

	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
	gl.enableVertexAttribArray(position);
	gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

	function update(hue: number) {
		requestAnimationFrame(() => {
			gl.uniform1f(hue_rad, hue / 360);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		});
	}

	update(hue);

	return {
		update,
		destroy() {
			gl.deleteProgram(shaderProgram);
		}
	};
}

function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource)!;
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource)!;

	const shaderProgram = gl.createProgram()!;
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		throw `unable to init shader: ${gl.getProgramInfoLog(shaderProgram)}`;
	}

	return shaderProgram;
}

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
	const shader = gl.createShader(type)!;

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const info = gl.getShaderInfoLog(shader);
		gl.deleteShader(shader);
		throw `error compiling shaders: ${info}`;
	}

	return shader;
}
