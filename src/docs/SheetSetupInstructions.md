
# Setting Up Google Sheets for Form Submissions

To connect your contact form to a Google Sheet, follow these steps:

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet (e.g., "SKYE Contact Form Submissions")
3. In the first row, add headers for each form field:
   - timestamp
   - name
   - email
   - company
   - phone
   - website
   - budget
   - hearAboutUs
   - message

## 2. Set Up Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Replace the default code with:

```javascript
const sheetName = 'Sheet1'; // Change to your sheet name if different
const scriptProps = PropertiesService.getScriptProperties();

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(sheetName);
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    
    const newRow = headers.map(header => {
      return header === 'timestamp' ? new Date() : e.parameter[header];
    });
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  finally {
    lock.releaseLock();
  }
}

function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = doc.getSheetByName(sheetName);
  
  // Check if headers exist, create them if not
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'timestamp',
      'name',
      'email',
      'company',
      'phone',
      'website',
      'budget',
      'hearAboutUs',
      'message'
    ]);
  }
}
```

3. Click "Save" and name your project (e.g., "SKYE Form Handler")
4. Click on "Deploy" > "New deployment"
5. Select type: "Web app"
6. Set the following:
   - Description: "SKYE Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
7. Click "Deploy"
8. Copy the Web app URL provided
9. Update the `scriptURL` in your `Contact.tsx` file with this URL

## 3. Enable CORS (Cross-Origin Resource Sharing)

Since your form will be submitted from a different domain, you need to handle CORS:

1. In the Apps Script editor, go to "Project Settings" (gear icon)
2. Check the box for "Show appsscript.json manifest in editor"
3. Click "Editor" to go back to the code view
4. Open the `appsscript.json` file (should now be visible)
5. Update it to include:

```json
{
  "timeZone": "Your_Timezone",
  "dependencies": {},
  "webapp": {
    "access": "ANYONE_ANONYMOUS",
    "executeAs": "USER_DEPLOYING"
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

6. Save and redeploy your web app

## 4. Test Your Integration

Submit a test entry through your form and check if it appears in your Google Sheet!
