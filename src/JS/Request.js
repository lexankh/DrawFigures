export class Request {
  constructor(form) {
    this.form = form;
    this.input = this.form.querySelector(".drawer__request");
    this.optionsArr = [];

    
  }

  operateFigure() {
    this.optionsArr = this.input.value.split(" ");
    this.figure = this.optionsArr[0];
    this.thickness = this.optionsArr[this.optionsArr.length - 1]; //толщина линии в px
    this.fromDimensions = JSON.parse(this.optionsArr[2]);
    if (this.figure == "line") {
        
        this.toDimensions = JSON.parse(this.optionsArr[3]);
        this.color = this.optionsArr[5];
    } else if (this.figure == "rectangle") {
        this.toDimensions = JSON.parse(this.optionsArr[3]);
        this.color = this.optionsArr[5];
        this.bgcolor = this.optionsArr[7];
    } else if (this.figure == "triangle") {

      this.toDimensions = JSON.parse(this.optionsArr[3]);
        this.triangleDimension = JSON.parse(this.optionsArr[4]);
        this.color = this.optionsArr[6];
        this.bgcolor = this.optionsArr[8];
    } else if (this.figure == "circle") {
        this.radius = JSON.parse(this.optionsArr[4]);
        this.color = this.optionsArr[6];
        this.bgcolor = this.optionsArr[8];

    } else if (this.figure == "ellipse") {
        this.radius = JSON.parse(this.optionsArr[4]);
        this.radius2 = JSON.parse(this.optionsArr[6]);
        this.color = this.optionsArr[8];
        this.bgcolor = this.optionsArr[10];
    } else {
      alert('Неподдерживаемая фигура');
    }
   
    
    const parameters = {
        figure: this.figure,
        fromDimensions: this.fromDimensions,
        toDimensions: this.toDimensions,
        color: this.color,
        bgcolor: this.bgcolor,
        triangleDimension: this.triangleDimension,
        radius: this.radius,
        radius2: this.radius2,
        thickness: this.thickness
    }
    return parameters;

    
  }

  submitHandler () {
    this.operateFigure();
  };

 
}
