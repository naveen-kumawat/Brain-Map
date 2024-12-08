const region = document.getElementById('region');
const subRegion = document.getElementById('subRegion');
const thisPath = document.getElementById('layer1');


document.querySelector(".self-esteem").onmouseover = function(){getInfo('Aspiring', this.className.baseVal, this);};
document.querySelector(".approbativeness").onmouseover = function(){getInfo('Aspiring', this.className.baseVal)};
document.querySelector(".cautiousness").onmouseover = function(){getInfo('Aspiring', this.className.baseVal)};
document.querySelector(".firmness").onmouseover = function(){getInfo('Aspiring', this.className.baseVal)};
document.querySelector(".conscientiousness").onmouseover = function(){getInfo('Aspiring', this.className.baseVal)};
document.querySelector(".sublimity").onmouseover = function(){getInfo('Aspiring', this.className.baseVal)};
document.querySelector(".veneration").onmouseover = function(){getInfo('Moral', this.className.baseVal)};
document.querySelector(".benevolence").onmouseover = function(){getInfo('Moral', this.className.baseVal)};
document.querySelector(".hope").onmouseover = function(){getInfo('Moral', this.className.baseVal)};
document.querySelector(".spirituality").onmouseover = function(){getInfo('Moral', this.className.baseVal)};
document.querySelector(".imitation").onmouseover = function(){getInfo('Moral', this.className.baseVal)};
document.querySelector(".human-nature").onmouseover = function(){getInfo('Reflectives', this.className.baseVal)};
document.querySelector(".agreeableness").onmouseover = function(){getInfo('Reflectives', this.className.baseVal)};
document.querySelector(".causality").onmouseover = function(){getInfo('Reflectives', this.className.baseVal)};
document.querySelector(".comparativeness").onmouseover = function(){getInfo('Reflectives', this.className.baseVal)};
document.querySelector(".bibativeness").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".tune").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".time").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".locality").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".eventuality").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".calculation").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".order").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".color").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".weight").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".size").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".individuality").onmouseover = function(){getInfo('Percertives', this.className.baseVal)};
document.querySelector(".mindfullness").onmouseover = function(){getInfo('Self Perfecting', this.className.baseVal)};
document.querySelector(".mirthfulness").onmouseover = function(){getInfo('Self Perfecting', this.className.baseVal)};
document.querySelector(".ideality").onmouseover = function(){getInfo('Self Perfecting', this.className.baseVal)};
document.querySelector(".constructiveness").onmouseover = function(){getInfo('Self Perfecting', this.className.baseVal)};
document.querySelector(".continuity").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".freindship").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".conjugality").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".amativeness").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".parental-love").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".inhabitiveness").onmouseover = function(){getInfo('Domest', this.className.baseVal)};
document.querySelector(".vitativeness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};
document.querySelector(".combativeness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};
document.querySelector(".secretiveness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};
document.querySelector(".aquisitiveness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};
document.querySelector(".destructiveness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};
document.querySelector(".alimentiveness").onmouseover = function(){getInfo('Animal', this.className.baseVal)};









function getInfo(regionName, classname, pathBrain){

  //newSvg = document.createElementNS("http://www.w3.org/1999/xhtml", "path");
  //newSvg.setAttribute("d", pathBrain.getAttribute('d'));

  //newSvg.setAttribute('id', "worksss");
  //newSvg.setAttribute('inkscape:connector-curvature', "0");


  //var x = '<path d="' + pathBrain.getAttribute('d') + '"/>';
  //node =  document.createElement("path")
  //console.log(node);

    //thisPath.appendChild(newSvg);

    region.innerHTML = regionName;
    subRegion.innerHTML = classname;
    this.onmouseout = function(){region.innerHTML = "Hover over a region"; subRegion.innerHTML = ""}

}
