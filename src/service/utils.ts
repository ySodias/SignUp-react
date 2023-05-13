// @ts-nocheck
import jsPDF from "jspdf";
import { IMatricula } from "../interfaces/IMatricula";

export const delay = (ms: number) => {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export const pdfGenerate = (keyword: IMatricula) => {
    let doc = new jsPDF();
    var img = new Image();
    let html = generateText(keyword)
    doc.html(html, {
        callback: function(doc) {
            // Save the PDF
            doc.save('matricula.pdf');
        },
        margin: [30, 30, 30, 30],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 900 //window width in CSS pixels
    })
    img.src = 'https://raw.githubusercontent.com/ySodias/SignUp-react/main/src/assets/img/icon.png'
    doc.addImage(img, 'png', 185, 5, 15, 15);
}

export const pdfGridGenerate = (keyword: any[]) => {
    
    let doc = new jsPDF();
    var img = new Image();
    let baseGridHtmlString = baseGridHtml(keyword[0][0]?.nome_cliente)
    keyword[0].forEach(k => {
        let teste = generateGridHTML(k)
        baseGridHtmlString = baseGridHtmlString.concat('', teste)
        console.log(baseGridHtmlString)
    })
    baseGridHtmlString.concat(`</table>
    <p style="margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif">&nbsp;</p>
    </div>`)
    doc.html(baseGridHtmlString, {
        callback: function(doc) {
            // Save the PDF
            doc.save('treino.pdf');
        },
        margin: [30, 30, 30, 30],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 900 //window width in CSS pixels
    })
    img.src = 'https://raw.githubusercontent.com/ySodias/SignUp-react/main/src/assets/img/icon.png'
    doc.addImage(img, 'png', 185, 5, 15, 15);
}

export const baseGridHtml = (nome: String) => {
    return `
    
    <div style="size:595.3pt 841.9pt;margin:1pt 5.0cm 70.85pt 0cm;">

    <p style="margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='text-align:center;line-height:normal;
    background:white'><span style='font-size:24.0pt;font-family:Roboto;color:#212529'>Treino Semanal ${nome}</span></p>
    
    <hr>

    <table style="margin-top:60px" border=1 cellspacing=0 cellpadding=0 align=left
     style='border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:
     4.8pt'>
     <tr style='background-color:#fb6dba'>
      <td width=102 valign=top style='width:76.45pt;border:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Exercício</span></span></b></p>
      </td>
      <td width=108 valign=top style='width:81.0pt;border:solid #BFBFBF 1.0pt;
      border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Repetições</span></span></b></p>
      </td>
      <td width=62 valign=top style='width:46.4pt;border:solid #BFBFBF 1.0pt;
      border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Carga</span></span></b></p>
      </td>
      <td width=95 valign=top style='width:70.9pt;border:solid #BFBFBF 1.0pt;
      border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Frequência</span></span></b></p>
      </td>
      <td width=94 valign=top style='width:250.4pt;border:solid #BFBFBF 1.0pt;
      border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Data
      Início</span></b></p>
      </td>
      <td width=121 valign=top style='width:250.4pt;border:solid #BFBFBF 1.0pt;
      border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:8.0pt;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><b><span style='font-family:"Roboto Light";color:white'>Data
      Troca</span></b></p>
      </td>
     </tr>`
}

export const generateGridHTML = (keyword: any) => {
    return `
     <tr>
      <td width=102 valign=top style='width:76.45pt;border:solid #BFBFBF 1.0pt;
      border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.nome_exercicio}</span></p>
      </td>
      <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
      none;border-bottom:solid #BFBFBF 1.0pt;border-right:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.repeticoes}</span></p>
      </td>
      <td width=62 valign=top style='width:46.4pt;border-top:none;border-left:none;
      border-bottom:solid #BFBFBF 1.0pt;border-right:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.carga}</span></p>
      </td>
      <td width=95 valign=top style='width:70.9pt;border-top:none;border-left:none;
      border-bottom:solid #BFBFBF 1.0pt;border-right:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.frequencia}</span></p>
      </td>
      <td width=94 valign=top style='width:250.4pt;border-top:none;border-left:
      none;border-bottom:solid #BFBFBF 1.0pt;border-right:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.data_inicio}</span></p>
      </td>
      <td width=121 valign=top style='width:250.4pt;border-top:none;border-left:
      none;border-bottom:solid #BFBFBF 1.0pt;border-right:solid #BFBFBF 1.0pt;
      padding:0cm 5.4pt 0cm 5.4pt'>
      <p style="margin-top:3pt;margin-right:0cm;margin-bottom:3pt;margin-left:0cm;line-height:107%;font-size:11.0pt;font-family:'Calibri',sans-serif" align=center style='margin-bottom:0cm;text-align:center;
      line-height:normal'><span style='font-family:"Roboto Light"'>${keyword.data_troca}</span></p>
      </td>
     </tr>`
}

export const generateText = (keyword: IMatricula) => {
    return `
    <div style='size:595.3pt 841.9pt;
        margin:0cm 3.0cm 70.85pt 0cm;'>

<p align=center style='text-align:center'><b><span
style='font-size:16.0pt;line-height:107%;font-family:"Arial",sans-serif;
color:#353740'>CONTRATO DE MATRÍCULA</span></b><span style='font-size:12.0pt;
line-height:107%;font-family:"Arial",sans-serif;color:#353740'><o:p></o:p></span></p>

<p style='line-height:150%'><b><span style='font-size:12.0pt;
line-height:150%;font-family:"Arial",sans-serif;color:#353740'><o:p>&nbsp;</o:p></span></b></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>Esta é uma declaração de
contrato de matrícula entre ${keyword.nomeAluno} e a Academia Bem-estar. <o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>Este contrato tem início a
partir de ${keyword.dataInicio} e possui validade indetermiada. <o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>O aluno está concordando
em participar dos serviços oferecidos pela Academia durante o período <br /> de
vigência deste contrato.<o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'><span
style='mso-spacerun:yes'></span>O aluno concorda em pagar 
as mensalidades de R$ ${keyword.valorMensalidade},00 , vigentes de acordo com o plano esco- <br /> lhido. <o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>O aluno também concorda em
cumprir as regras e políticas da Academia. Tais regras e políticas  <br /> incluem, mas
não se limitam a:<o:p></o:p></span></p>

<p style='margin-left:35.4pt;text-align:justify;line-height:
150%'><span style='font-family:"Arial",sans-serif;color:#353740'><span
style='mso-spacerun:yes'></span>&#182; Uso apropriado dos equipamentos da Academia;
<o:p></o:p></span></p>

<p style='margin-left:35.4pt;text-align:justify;line-height:
150%'><span style='font-family:"Arial",sans-serif;color:#353740'>&#182; Respeito aos
instrutores e outros alunos; <o:p></o:p></span></p>

<p style='margin-left:35.4pt;text-align:justify;line-height:
150%'><span style='font-family:"Arial",sans-serif;color:#353740'>&#182; Não uso de
drogas ou álcool durante o treino; <o:p></o:p></span></p>

<p style='margin-left:35.4pt;text-align:justify;line-height:
150%'><span style='font-family:"Arial",sans-serif;color:#353740'>&#182; Não
perturbar outras pessoas durante o treino. <o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>O aluno concorda em
cumprir todas as regras e políticas da Academia e aceita todos os riscos <br>
associados ao uso dos serviços da Academia. O Aluno concorda em assumir toda a 
responsabili- <br> dade por  qualquer lesõo, dano, perda ou gastos incorridos como
resultado do uso dos serviços da Academia. <o:p></o:p></span></p>

<p style='text-align:justify;line-height:150%'><span
style='font-family:"Arial",sans-serif;color:#353740'>Este contrato é válido e
deve ser cumprido por ambas as partes. <o:p></o:p></span></p>

<p style='text-align:justify'><span style='font-family:"Arial",sans-serif;
color:#353740'><o:p>&nbsp;</o:p></span></p>

<p style='text-align:justify'><span style='font-family:"Arial",sans-serif;
color:#353740'><o:p>&nbsp;</o:p></span></p>

<p style='text-align:justify'><span style='font-family:"Arial",sans-serif;
color:#353740'><o:p>&nbsp;</o:p></span></p>

<p style='text-align:justify'><span style='font-family:"Arial",sans-serif;
color:#353740'><o:p>&nbsp;</o:p></span></p>



<p style='text-align:justify; margin-top:120pt; margin-left:280pt'><span style='font-family:"Arial",sans-serif;
color:#353740'>Assinatura do Aluno: <u> ${keyword.nomeAluno} </u>  <o:p></o:p></span></p>

<p style='text-align:justify; margin-left:280pt' margin-bottom:0pt><span style='font-family:"Arial",sans-serif;
color:#353740'>Assinatura da Academia: ________________<o:p></o:p></span></p>

</div>
    `
}

export const checkInteger = (num: String | Number) => {
    if (Number(num) <= 0) {
      return false
    } else return true
  }

export  const checkString = (text: String) => {
    if (text.length < 3) {
      return false
    } else return true
  }

export const checkCPF = (cpfUsuario: String) => {
    return /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpfUsuario)
}
