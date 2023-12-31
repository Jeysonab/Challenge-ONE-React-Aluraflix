export const validTitle = (titi) => {
	let length = titi.length;
	if (length < 2) {
		return { valid: false, error: 1 };
	} else if (length > 50) {
		return { valid: false, error: 2 };
	} else {
		return { valid: true, error: 0 };
	}
};

export const validEnlace = (enlace) => {
	if (!enlace.includes("youtube.com")) {
		return { valid: false, error: 3 };
	}

	const videoId = enlace.slice("youtube.com".length);
	if (videoId.length < 1) {
		return { valid: false, error: 4 };
	}

	if (enlace.length < 3) {
		return { valid: false, error: 2 };
	} else if (!(enlace.includes(".") && enlace.includes("/"))) {
		return { valid: false, error: 1 };
	} else {
		return { valid: true, error: 0 };
	}
};

export const validDescripcion = (descripcion) => {
	let length = descripcion.length;
	if (length < 7) {
		return { valid: false, error: 1 };
	} else if (length > 300) {
		return { valid: false, error: 2 };
	} else {
		return { valid: true, error: 0 };
	}
};

export const validCodigo = (codigo) => {
	let length = codigo.length;
	const codeArr = Array.from(codigo);
	if (length < 3) {
		return { valid: false, error: 1 };
	} else if (codeArr[0] !== "#") {
		return { valid: false, error: 2 };
	} else {
		return { valid: true, error: 0 };
	}
};
