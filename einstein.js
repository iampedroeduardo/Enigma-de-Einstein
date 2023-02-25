function SorteiaTab(){
    opcs=[];
    for(c=0;c<4;c++){
        opcs.push([]);
        for(i=0;i<4;i++){
            opcs[c][i]=opcoes[c][i];
        }
    }
    for(c=0;c<4;c++){
        tab.push([]);
        for(i=0;i<4;i++){
            n=Math.floor(Math.random()*opcs[c].length);
            tab[c].push(opcs[c][n]);
            opcs[c].splice(n,1);
        }
    }
}
function CriaTab(){
    for(c=0;c<4;c++){
        div=document.getElementById(""+c);
        for(i=0;i<4;i++){
            div2=document.createElement("div");
            div2.setAttribute("id",""+c+i);
            div2.setAttribute("class","quadrado");
            div2.setAttribute("onclick","Seleciona("+c+","+i+")");
            if(c>0){
                for(j=0;j<4;j++){
                    img= new Image();
                    img.src="Imagens/"+opcoes[c][j]+".png";
                    img.setAttribute("class","fotinha")
                    img.setAttribute("style","opacity:"+tabuleiro[c][i][j]);
                    div2.appendChild(img);
                }
            }
            else{
                img=new Image();
                img.src="Imagens/"+tab[c][i]+".png";
                img.setAttribute("class","fotona")
                div2.appendChild(img);
            }
            div.appendChild(div2);
        }
    }
}
function Seleciona(linha,coluna){
    quadrado=document.getElementById(""+linha+coluna);
    for(c=0;c<4;c++){
        for(i=0;i<4;i++){
            div=document.getElementById(""+c+i);
            div.style.border="1px solid white";
        }
    }
    quadrado.style.border="2px solid yellow";
    for(c=0;c<4;c++){
        if(document.getElementById("foto"+c)!=null){
            img=document.getElementById("foto"+c);
            img.parentNode.removeChild(img);
        }
    }
    for(c=0;c<4;c++){
        div=document.getElementById("quadrado"+c);
        img= new Image();
        img.src="Imagens/"+opcoes[linha][c]+".png";
        img.setAttribute("id","foto"+c);
        img.setAttribute("class","foto");
        img.setAttribute("style","opacity:"+tabuleiro[linha][coluna][c]);
        console.log(tabuleiro[linha][coluna][c]);
        div.appendChild(img);
    }
}
function GeraOpacidades(){
    for(c=0;c<4;c++){
        tabuleiro.push([]);
        for(i=0;i<4;i++){
            tabuleiro[c].push([]);
            for(j=0;j<4;j++){
                tabuleiro[c][i][j]="1.3";
            }
        }
    }
}
function TiraOpacidades(){
    for(c=0;c<4;c++){
        for(i=0;i<4;i++){
            if(opcoes[0][i]!=tab[0][c]){
                tabuleiro[0][c][i]="0.3";
            }
        }
    }
}
function GeraDicas(){
    for(c=0;c<4;c++){
        nums=[2,3];
        n=nums[Math.floor(Math.random()*2)];
        for(i=0;i<n;i++){
            tof=false;
            do{
                linha=tab[Math.ceil(Math.random()*3)];
                if(i==0){
                    sn=" "
                }
                else{
                    soun=[" não "," "];
                    sn=soun[Math.floor(Math.random()*2)];
                }
                if(linha.includes("Brasil")){
                    verbo="mora no ";
                }
                else if(linha.includes("maçã")){
                    verbo="gosta de ";
                }
                else if(linha.includes("volei")){
                    verbo="joga ";
                }
                if(sn==" não "){
                    possiveis=[];
                    for(j=0;j<4;j++){
                        if(j!=c){
                            possiveis.push(linha[j]);
                        }
                    }
                    afirm=possiveis[Math.floor(Math.random()*3)];
                }
                else{
                    afirm=linha[c];
                }
                dica="O "+tab[0][c]+sn+verbo+afirm+".";
                tof=dicas.includes(dica);
            }while(tof)
            dicas.push(dica);
        }
    }
    soun=[" "," "," "," "," não "," não "," não "," não "," não "," não "];
    for(c=0;c<10;c++){
        tof=true;
        do{
            nums=[1,2,3];
            n1=Math.floor(Math.random()*nums.length);
            n11=nums[n1];
            nums.splice(n1,1);
            n2=Math.floor(Math.random()*nums.length);
            n22=nums[n2];
            nums.splice(n2,1);
            linha1=tab[n11];
            linha2=tab[n22];
            console.log(linha1);
            console.log(linha2);
            if(linha1.includes("Brasil")){
                verbo1="mora no ";
            }
            else if(linha1.includes("maçã")){
                verbo1="gosta de ";
            }
            else if(linha1.includes("volei")){
                verbo1="joga ";
            }
            if(linha2.includes("Brasil")){
                verbo2="mora no ";
            }
            else if(linha2.includes("maçã")){
                verbo2="gosta de ";
            }
            else if(linha2.includes("volei")){
                verbo2="joga ";
            }
            n3=Math.floor(Math.random()*soun.length);
            sn=soun[n3];
            pos=Math.floor(Math.random()*linha1.length)
            afirm1=linha1[pos];
            if(sn==" "){
                afirm2=linha2[pos];
            }
            else{
                possiveis=[];
                for(j=0;j<4;j++){
                    if(j!=pos){
                        possiveis.push(linha2[j]);
                    }
                }
                afirm2=possiveis[Math.floor(Math.random()*3)];
            }
            dica="Quem "+verbo1+afirm1+sn+verbo2+afirm2+".";
            tof=dicas.includes(dica);
        }while(tof)
        dicas.push(dica);
        soun.splice(n3,1);
    }
}
function ColocaDica(){
    num=1;
    numero=document.getElementById("numero");
    numero.innerHTML="Dica: "+num;
    dica=document.getElementById("dica");
    dica.innerHTML=dicas[0];
}
function VoltaDica(){
    num--;
    numero=document.getElementById("numero");
    numero.innerHTML="Dica: "+num;
    dica=document.getElementById("dica");
    dica.innerHTML=dicas[num-1];
}
function AumentaDica(){
    num++;
    numero=document.getElementById("numero");
    numero.innerHTML="Dica: "+num;
    dica=document.getElementById("dica");
    dica.innerHTML=dicas[num-1];
}
var opcoes=[["Pedro","Matheus","Arthur","Rafael"],["Brasil","Canadá","Japão","México"],["maçã","laranja","uva","morango"],["volei","futebol","basquete","tenis"]]
var tab=[];
var tabuleiro=[];
var dicas=[];
var num;
var relacoes=[]
SorteiaTab();
GeraOpacidades();
CriaTab();
TiraOpacidades();
GeraDicas();
ColocaDica();