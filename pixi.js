let type = "WebGl";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
  }

  PIXI.utils.sayHello(type)