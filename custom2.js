// Sample sensor data (simulated)
const sensorData = [
  { date: '2024-06-01', Rice: 28, Wheat: 65, Sugar: 40 },
  { date: '2024-06-02', Rice: 27, Wheat: 64, Sugar: 38 },
  { date: '2024-06-03', Rice: 29, Wheat: 67, Sugar: 42 },
  { date: '2024-06-04', Rice: 30, Wheat: 66, Sugar: 41 },
  { date: '2024-06-05', Rice: 28, Wheat: 63, Sugar: 39 }
];

const productData = {
  Rice: { code: 9347979, barcode: '*9347979*' },
  Wheat: { code: 7013734, barcode: '*7013734*' },
  Sugar: { code: 7349510, barcode: '*7349510*' }
};

// Function to initialize the page
function initializeReportsPage() {
  // Load reports
  loadReports(sensorData);
}

// Function to load reports
function loadReports(data) {
  const reportContainer = document.querySelector('.reports-container');

  // Clear existing content
  reportContainer.innerHTML = '';

  // Generate HTML for each report
  data.forEach(record => {
    const reportHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Report for ${record.date}</h5>
          <ul>
            <li>Rice: ${record.Rice !== undefined ? record.Rice + 'KG' : '-'}</li>
            <li>Wheat: ${record.Wheat !== undefined ? record.Wheat + 'KG' : '-'}</li>
            <li>Sugar: ${record.Sugar !== undefined ? record.Sugar + 'KG' : '-'}</li>
          </ul>
        </div>
      </div>
    `;
    // Append each report to the container
    reportContainer.innerHTML += reportHTML;
  });
}

// Function to filter reports based on date range and barcode/product code/RFID
function filterReports() {
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;
  const barcode = document.getElementById('barcode').value;

  let filteredData = sensorData;

  // Filter data based on date range if both dates are provided
  if (fromDate !== '' && toDate !== '') {
    filteredData = filteredData.filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= new Date(fromDate) && recordDate <= new Date(toDate);
    });
  }

  // Further filter data based on barcode/product code/RFID if provided
  if (barcode !== '') {
    filteredData = filteredData.map(record => {
      const matchedProduct = Object.keys(productData).find(item => {
        const { code, barcode: itemBarcode } = productData[item];
        return code.toString() === barcode || itemBarcode === barcode;
      });

      if (matchedProduct) {
        return {
          date: record.date,
          [matchedProduct]: record[matchedProduct]
        };
      }

      return null;
    }).filter(record => record !== null);
  }

  loadReports(filteredData);
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeReportsPage();
});
