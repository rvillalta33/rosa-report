import ExcelJS from 'exceljs';

const exportExcel = (data,fileName) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(fileName);

  // Verifica si hay datos
  if (data.length === 0) {
    console.error('No hay datos para exportar.');
    return;
  }

  // Añadir encabezados de columna basados en las propiedades del primer objeto en data
  const headerRow = worksheet.addRow(Object.keys(data[0]));
  headerRow.eachCell(cell => {
    cell.font = { bold: true };
  });

  // Añadir filas de datos
  data.forEach(row => {
    worksheet.addRow(Object.values(row));
    // Puedes personalizar el formato de cada celda si es necesario
  });

  // Guardar o descargar el archivo Excel
  workbook.xlsx.writeBuffer().then(buffer => {
    // Código para guardar o descargar el archivo Excel
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
  });
};

export { exportExcel };
