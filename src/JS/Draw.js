export class Draw {
  constructor(parameters) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.figure = parameters.figure;
    this.fromDimensions = parameters.fromDimensions;
    this.toDimensions = parameters.toDimensions;
    this.color = parameters.color;
    this.thickness = parameters.thickness;
    if (parameters.bgcolor == undefined) {
      this.bgcolor = "transparent";
    } else {
      this.bgcolor = parameters.bgcolor;
    }
    this.triangleDimension = parameters.triangleDimension;
    this.radius = parameters.radius;
    this.radius2 = parameters.radius2;
    this.ctx.strokeStyle = this.color;
    this.ctx.fillStyle = this.bgcolor;
    this.ctx.lineWidth = this.thickness;
    

    switch (this.figure) {
      case "line":
        this.line();
        break;
      case "rectangle":
        this.rectangle();
        break;
      case "triangle":
        this.triangle();
        break;
      case "circle":
        this.circle();
        break;
      case "ellipse":
        this.ellipse();
        break;
    }
  }

  line() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.fromDimensions[0], this.fromDimensions[1]);
    this.ctx.lineTo(this.toDimensions[0], this.toDimensions[1]);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  rectangle() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.fromDimensions[0],
      this.fromDimensions[1],
      this.toDimensions[0],
      this.toDimensions[1]
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  triangle() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.fromDimensions[0], this.fromDimensions[1]);
    this.ctx.lineTo(this.toDimensions[0], this.toDimensions[1]);
    this.ctx.lineTo(this.triangleDimension[0], this.triangleDimension[1]);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  circle() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.fromDimensions[0],
      this.fromDimensions[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    this.ctx.fill();
    this.ctx.stroke();
  }

  ellipse() {
    this.ctx.beginPath();
    this.ctx.ellipse(
      this.fromDimensions[0],
      this.fromDimensions[1],
      this.radius,
      this.radius2,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    this.ctx.stroke();
    this.ctx.fill();
  }

}
