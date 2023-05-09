import jsPDF from "jspdf";
import { IMatricula } from "../interfaces/IMatricula";

export const delay = (ms: number) => {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export const pdfGenerate = (keyword: IMatricula) => {
    let doc = new jsPDF();
    let html = generateText(keyword)
    doc.html(html, {
        callback: function(doc) {
            // Save the PDF
            doc.save('document-html.pdf');
        },
        margin: [20, 15, 15, 15],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    })
}



export const generateText = (keyword: IMatricula) => {
    return `
    <div class="pos" id="_0:0" style="top:0">
    <div class="pos" id="_219:99" style="top:99;left:219; text-align: center;">
    <span id="_16.1" style="font-weight:bold;  font-family:Arial; font-size:18px; color:#34363f">
    Contrato de Matr&#237;cula em Academia de Gin&#225;stica</span>
    </div>
    <br>
    <br>
    <div class="pos" id="_118:203" style="text-align: justify; top:203;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    Esta &#233; uma declara&#231;&#227;o de contrato de matr&#237;cula entre ${keyword.nomeAluno} e a Academia Bem Estar</span>
    </div>
    <br>
    <div class="pos" id="_118:266" style="text-align: justify; top:266;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    Este contrato tem in&#237;cio a partir de ${keyword.dataInicio} e possui validade indeterminada, cabendo ao<br> aluno finalizar sua matrícula quando for conveniente </span>
    </div>
    <br>
    <div class="pos" id="_118:330" style="text-align: justify; top:330;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    O Aluno est&#225; concordando em participar dos servi&#231;os oferecidos pela Academia durante
    o <br> per&#237;odo de vig&#234;ncia deste contrato.</span>
    </div>
    <br>
    <div class="pos" id="_118:394" style="text-align: justify; top:394;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    O Aluno concorda em pagar as mensalidades de R$ ${keyword.valorMensalidade},00. </span>
    </div>
    <br>
    <div class="pos" id="_118:458" style="text-align: justify; top:458;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    O Aluno tamb&#233;m concorda em cumprir as regras e pol&#237;ticas da Academia. Tais regras e <br>
    pol&#237;ticas incluem, mas n&#227;o se limitam a:</span>
    </div>
    <br>
    <div class="pos" id="_118:522" style="text-align: justify; top:522;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
     &#149; Uso apropriado dos equipamentos da Academia; </span>
    </div>
    <div class="pos" id="_118:559" style="text-align: justify; top:559;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    &#149; Respeito aos instrutores e outros alunos; </span>
    </div>
    <div class="pos" id="_118:597" style="text-align: justify; top:597;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    &#149; N&#227;o uso de drogas ou &#225;lcool durante o treino; </span>
    </div>
    <div class="pos" id="_118:634" style="text-align: justify; top:634;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    &#149; N&#227;o perturbar outras pessoas durante o treino. </span>
    </div>
    <br>
    <div class="pos" id="_118:671" style="text-align: justify; top:671;left:118">
    <span id="_14.7" style=" font-family:Arial; font-size:14.7px; color:#34363f">
    O Aluno concorda em cumprir todas as regras e pol&#237;ticas da Academia e aceita todos <br>
    os riscos associados ao uso dos servi&#231;os da Academia. O Aluno concorda em assumir
    toda a responsa - <br> bilidade por qualquer les&#227;o, dano, perda ou gastos incorridos como
    resultado do uso dos servi - <br>&#231;os da Academia. </span>
    </div>
    <br>
    <div class="pos" id="_118:788" style="text-align: justify; top:788;left:118">
    <span id="_14.8" style=" font-family:Arial; font-size:14.8px; color:#34363f">
    A Academia se isenta de qualquer responsabilidade por qualquer les&#227;o, dano, perda ou <br>
    gastos incorridos como resultado do uso dos servi&#231;os da Academia.</span>
    </div>
    <div class="pos" id="_118:852" style="text-align: justify; top:852;left:118">
    <br>
    <br>
    <span id="_14.8" style="text-align: justify;  font-family:Arial; font-size:14.8px; color:#34363f">
    Este contrato &#233; v&#225;lido e deve ser cumprido por ambas as partes. </span>
    </div>
    <br>
    <br>
    <div class="pos" id="_118:1010" style="text-align: justify; top:1010;left:118">
    <span id="_14.8" style=" font-family:Arial; font-size:14.8px; color:#34363f">
    Assinatura do Aluno: ________________ </span>
    </div>
    <div class="pos" id="_118:1040" style="text-align: justify;  top:1040;left:118">
    <span id="_14.8" style=" font-family:Arial; font-size:14.8px; color:#34363f">
    Assinatura da Academia: ________________</span>
    </div>
    `
}