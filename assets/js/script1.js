
const data = [
    { sNo: 1, priority: 'High', summary: 'Issue with login', status: 'Open', customer: 'John Doe', accNo: 12345 },
    { sNo: 2, priority: 'Medium', summary: 'Payment not processed', status: 'Closed', customer: 'Jane Doe', accNo: 12346 },
    { sNo: 3, priority: 'Low', summary: 'Unable to download', status: 'In Progress', customer: 'Alice', accNo: 12347 },
    { sNo: 4, priority: 'High', summary: 'Error in report', status: 'Open', customer: 'Bob', accNo: 12348 },
    { sNo: 5, priority: 'Medium', summary: 'Slow performance', status: 'Closed', customer: 'Charlie', accNo: 12349 },
    { sNo: 6, priority: 'Low', summary: 'Feature request', status: 'In Progress', customer: 'David', accNo: 12350 },
    { sNo: 7, priority: 'High', summary: 'Data sync issue', status: 'Open', customer: 'Eve', accNo: 12351 },
    { sNo: 8, priority: 'Medium', summary: 'UI bug', status: 'Closed', customer: 'Frank', accNo: 12352 },
    { sNo: 9, priority: 'Low', summary: 'Notification issue', status: 'In Progress', customer: 'Grace', accNo: 12353 },
    { sNo: 10, priority: 'High', summary: 'Security alert', status: 'Open', customer: 'Henry', accNo: 12354 },
    { sNo: 11, priority: 'Medium', summary: 'Account locked', status: 'Closed', customer: 'Irene', accNo: 12355 },
    { sNo: 12, priority: 'Low', summary: 'Missing data', status: 'In Progress', customer: 'Jack', accNo: 12356 },
    { sNo: 13, priority: 'High', summary: 'Server downtime', status: 'Open', customer: 'Karen', accNo: 12357 },
    { sNo: 14, priority: 'Medium', summary: 'Incorrect billing', status: 'Closed', customer: 'Leo', accNo: 12358 },
    { sNo: 15, priority: 'Low', summary: 'App crash', status: 'In Progress', customer: 'Mia', accNo: 12359 },
    { sNo: 16, priority: 'High', summary: 'Password reset', status: 'Open', customer: 'Noah', accNo: 12360 },
    { sNo: 17, priority: 'Medium', summary: 'Email not received', status: 'Closed', customer: 'Olivia', accNo: 12361 },
    { sNo: 18, priority: 'Low', summary: 'Feature enhancement', status: 'In Progress', customer: 'Paul', accNo: 12362 },
    { sNo: 19, priority: 'High', summary: 'Database error', status: 'Open', customer: 'Quinn', accNo: 12363 },
    { sNo: 20, priority: 'Medium', summary: 'Connectivity issue', status: 'Closed', customer: 'Rachel', accNo: 12364 },
    { sNo: 21, priority: 'Low', summary: 'UI improvement', status: 'In Progress', customer: 'Sam', accNo: 12365 },
    { sNo: 22, priority: 'High', summary: 'System crash', status: 'Open', customer: 'Tina', accNo: 12366 },
    { sNo: 23, priority: 'Medium', summary: 'Login timeout', status: 'Closed', customer: 'Uma', accNo: 12367 },
    { sNo: 24, priority: 'Low', summary: 'Data export issue', status: 'In Progress', customer: 'Victor', accNo: 12368 },
    { sNo: 25, priority: 'High', summary: 'Unauthorized access', status: 'Open', customer: 'Wendy', accNo: 12369 },
    { sNo: 26, priority: 'Medium', summary: 'Report generation', status: 'Closed', customer: 'Xavier', accNo: 12370 },
    { sNo: 27, priority: 'Low', summary: 'UI alignment', status: 'In Progress', customer: 'Yara', accNo: 12371 },
    { sNo: 28, priority: 'High', summary: 'Network issue', status: 'Open', customer: 'Zara', accNo: 12372 },
    { sNo: 29, priority: 'Medium', summary: 'Software update', status: 'Closed', customer: 'Aaron', accNo: 12373 },
    { sNo: 30, priority: 'Low', summary: 'Hardware failure', status: 'In Progress', customer: 'Bella', accNo: 12374 },
    { sNo: 31, priority: 'High', summary: 'System upgrade', status: 'Open', customer: 'Chris', accNo: 12375 },
    { sNo: 32, priority: 'Medium', summary: 'Backup issue', status: 'Closed', customer: 'Diana', accNo: 12376 },
    { sNo: 33, priority: 'Low', summary: 'Configuration error', status: 'In Progress', customer: 'Ethan', accNo: 12377 },
    { sNo: 34, priority: 'High', summary: 'Access denied', status: 'Open', customer: 'Fiona', accNo: 12378 },
    { sNo: 35, priority: 'Medium', summary: 'License issue', status: 'Closed', customer: 'George', accNo: 12379 },
    { sNo: 36, priority: 'Low', summary: 'Performance lag', status: 'In Progress', customer: 'Hannah', accNo: 12380 },
    { sNo: 37, priority: 'High', summary: 'Data breach', status: 'Open', customer: 'Ian', accNo: 12381 },
    { sNo: 38, priority: 'Medium', summary: 'Service outage', status: 'Closed', customer: 'Jill', accNo: 12382 },
    { sNo: 39, priority: 'Low', summary: 'UI glitch', status: 'In Progress', customer: 'Kyle', accNo: 12383 },
    { sNo: 40, priority: 'High', summary: 'Malware detected', status: 'Open', customer: 'Liam', accNo: 12384 },
    { sNo: 41, priority: 'Medium', summary: 'Spam issue', status: 'Closed', customer: 'Mona', accNo: 12385 },
    { sNo: 42, priority: 'Low', summary: 'Update request', status: 'In Progress', customer: 'Nina', accNo: 12386 },
    { sNo: 43, priority: 'High', summary: 'System failure', status: 'Open', customer: 'Oscar', accNo: 12387 },
    { sNo: 44, priority: 'Medium', summary: 'User feedback', status: 'Closed', customer: 'Pia', accNo: 12388 },
    { sNo: 45, priority: 'Low', summary: 'Security review', status: 'In Progress', customer: 'Quincy', accNo: 12389 },
    { sNo: 46, priority: 'High', summary: 'Ransomware alert', status: 'Open', customer: 'Rita', accNo: 12390 },
    { sNo: 47, priority: 'Medium', summary: 'Data corruption', status: 'Closed', customer: 'Steve', accNo: 12391 },
    { sNo: 48, priority: 'Low', summary: 'Backup failure', status: 'In Progress', customer: 'Tina', accNo: 12392 },
    { sNo: 49, priority: 'High', summary: 'Compliance issue', status: 'Open', customer: 'Uma', accNo: 12393 },
    { sNo: 50, priority: 'Medium', summary: 'Network latency', status: 'Closed', customer: 'Vera', accNo: 12394 },
];

let rowsPerPage = 10; // Default rows per page
let currentPage = 1;

function renderTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.sNo}</td>
            <td>${row.priority}</td>
            <td>${row.summary}</td>
            <td>${row.status}</td>
            <td>${row.customer}</td>
            <td>${row.accNo}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const prevBtn = document.getElementById('prevBtn');
    const lastBtn = document.getElementById('lastBtn');
    const pageNumbers = document.getElementById('pageNumbers');

    prevBtn.disabled = currentPage === 1;
    lastBtn.disabled = currentPage === totalPages;

    // Clear existing page numbers
    pageNumbers.innerHTML = '';

    // Update page numbers
    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.className = 'page-number';
        span.textContent = i;
        span.onclick = () => {
            currentPage = i;
            renderTable();
            renderPagination();
        };
        pageNumbers.appendChild(span);
    }

    // Update buttons
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
            renderPagination();
        }
    };

    lastBtn.onclick = () => {
        currentPage = totalPages;
        renderTable();
        renderPagination();
    };
}

document.getElementById('rowsPerPage').addEventListener('change', (event) => {
    rowsPerPage = Number(event.target.value);
    currentPage = 1; // Reset to the first page
    renderTable();
    renderPagination();
});

renderTable();
renderPagination();
