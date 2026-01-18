export function opacityColor(color1, color2, opacity){
    // eu tenho que arranjar um jeito de pegar os valores de rgba de color1 e color 2

    // I'm verifying if the params are rgb or rgba
    
    let values1;
    if (color1.includes("rgba")){
        values1 = color1.slice(5, -1);
    } else {
        values1 = color1.slice(4, -1);
    }  
    const valuesOfColor1 = values1.split(",");

    let values2;
    if (color2.includes("rgba")){
        values2 = color2.slice(5, -1);
    } else {
        values2 = color2.slice(4, -1);
    }
    const valuesOfColor2 = values2.split(",");
    
    // Agora eu vou separar os valores de RGBA em variaveis para ficar mais facil de entender

    // RGBA of first color
    const R1 = parseInt(valuesOfColor1[0]);
    const G1 = parseInt(valuesOfColor1[1]);
    const B1 = parseInt(valuesOfColor1[2]);
    let alpha1;

    if (valuesOfColor1.length === 3) {
        alpha1 = parseFloat(opacity / 100);
    } else if (valuesOfColor1.length === 4){
        alpha1 = parseInt(valuesOfColor1[3]);
    } else {
        console.error("My bro, this shit are broke");
    }

    // RGBA of second color
    const R2 = parseInt(valuesOfColor2[0]);
    const G2 = parseInt(valuesOfColor2[1]);
    const B2 = parseInt(valuesOfColor2[2]);
    let alpha2;

    if (valuesOfColor2.length === 3) {
        alpha2 = parseFloat(opacity / 100);
    } else if (valuesOfColor2.length === 4){
        alpha2 = parseInt(valuesOfColor2[3]);
    } else {
        console.error("My bro, this shit are broke 2");
    }

    const A = alpha1 + alpha2 * (1 - alpha1);
    const R = (R1 * alpha1 + R2 * alpha2 * (1 - 0.5)) / 1;
    const G = (G1 * alpha1 + G2 * alpha2 * (1 - 0.5)) / 1;
    const B = (B1 * alpha1 + B2 * alpha2 * (1 - 0.5)) / 1;

    const result = `rgba(${R}, ${G}, ${B}, ${A})`;
    console.log("result: "+result)
    return result;
}