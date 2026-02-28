/**
 * Show help dialog
 */
function help() {
  var ui = SpreadsheetApp.getUi();
  
  var html_output = HtmlService
  .createHtmlOutput('Si vous rencontrez un problème, vous pouvez créer une "Issue" sur <a target="_blank" href="https://github.com/louisthomaspro/carnet-de-suivi-dii-polytech">Github</a> ou me contacter : louisthomas.pro@gmail.com.<div style="color : red">Si votre problème concerne <strong>la feuille "Info"</strong>, ce n\'est pas de la responsabilité de l\'auteur original indiqué cité ci-dessus.<br>Une problème sur cette feuille "Info" serait dû à des modifications de code original (cf. <a target="_blank" href="https://github.com/LucasLP37/CDS_Modifie">ce repo Github</a>).</div>')
    .setWidth(500)
    .setHeight(125);
  SpreadsheetApp.getUi().showModalDialog(html_output, 'Aide');
  
  sendEvent("click", { "function": "help()" });
  
}

