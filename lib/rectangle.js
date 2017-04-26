'use strict';

let Shape = require('@ull-edna-joseluis-kevin-35l2/ull-shape');

/**
* Clase que representa figuras con formas rectangulares
* @class Rectangle
* @param {hash} options Alto y Ancho
*/
class Rectangle extends Shape {
    /**
	* Constructor de la clase Square
	* @construct Square
	* @param {hash} options Alto y Ancho
	*/
	constructor(options) {
		super(options);
	}
	/**
	* Función que calcula y devuelve el área de la figura
	* @function area
	* @return {number} Área de la figura
	*/
	area() {
		return (this.width * this.height);
	}
}

Shape.Shapes.Rectangle = Rectangle;

module.exports = Rectangle;