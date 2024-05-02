function readExcelFile(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        const fileData = reader.result;
        const workbook = XLSX.read(fileData, {
            type: 'binary'
        });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        populateTable(data);
    };
    reader.readAsBinaryString(input.files[0]);
}

function populateTable(data) {
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    table.innerHTML = ""; 
    
    data.forEach(row => {
        let newRow = table.insertRow();
        Object.values(row).forEach(value => {
            let cell = newRow.insertCell();
            cell.textContent = value;
        });
    });
}

