function doGet() {
   var app = HtmlService
      .createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  app.setTitle('EWH Calculator');
  return app;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}

function getVal(workbook, sheet, range) {
  return SpreadsheetApp
      .openById(workbook)
      .getSheetByName(sheet)
      .getRange(range)
      .getValues();
}