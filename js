document.addEventListener('DOMContentLoaded', function() {
    const listings = [
        { id: 1, name: 'Phòng trọ 1', price: 1500000, area: 20, address: 'Ba Đình', image: 'https://file4.batdongsan.com.vn/2023/10/03/20231003112006-3838_wm.jpg' },
        { id: 2, name: 'Phòng trọ 2', price: 2000000, area: 25, address: 'Cầu Giấy', image: 'https://file4.batdongsan.com.vn/resize/1275x717/2024/05/23/20240523092401-2607_wm.jpg' },
        { id: 3, name: 'Phòng trọ 3', price: 1800000, area: 22, address: 'Thanh Xuân', image: 'https://file4.batdongsan.com.vn/2023/08/11/20230811093455-8914_wm.jpg' },
        { id: 5, name: 'Phòng trọ 4', price: 1700000, area: 40, address: 'Đống Đa', image: 'https://file4.batdongsan.com.vn/2023/11/06/20231106155833-f8b4_wm.jpg' },
        { id: 4, name: 'Phòng trọ 5', price: 1600000, area: 55, address: 'Hà Đông', image: 'https://file4.batdongsan.com.vn/resize/1275x717/2024/01/09/20240109151150-3ee1_wm.jpg' },
        { id: 6, name: 'Phòng trọ 6', price: 19000000, area: 45, address: 'Hai Bà Trưng', image: 'https://file4.batdongsan.com.vn/2022/12/28/20221228205916-ca95_wm.jpg' },
        { id: 7, name: 'Phòng trọ 7', price: 22000000, area: 35, address: 'Hoàn kiếm', image: 'https://file4.batdongsan.com.vn/2023/10/06/20231006134049-5204_wm.jpg' },
        { id: 8, name: 'Phòng trọ 8', price: 2300000, area: 75, address: 'Thanh Xuân', image: 'https://file4.batdongsan.com.vn/2024/05/19/20240519191557-d354_wm.jpg' },
        { id: 9, name: 'Phòng trọ 9', price: 2500000, area: 80, address: 'Tây Hồ', image: 'https://file4.batdongsan.com.vn/resize/1275x717/2024/03/06/20240306141147-3c26_wm.jpg' },
        { id: 10, name: 'Phòng trọ 10', price: 2800000, area: 90, address: 'Hà Đông', image: 'https://file4.batdongsan.com.vn/2024/06/16/20240616175646-ce21_wm.jpg' },
        { id: 11, name: 'Phòng trọ 11', price: 3000000, area: 50, address: 'Hà Đông', image: 'https://file4.batdongsan.com.vn/2024/06/15/20240615012923-e427_wm.jpg' },
        { id: 12, name: 'Phòng trọ 12', price: 3200000, area: 55, address: 'Hoàn Kiếm', image: 'https://file4.batdongsan.com.vn/2023/08/22/20230822000402-7f3a_wm.jpg' },
        { id: 13, name: 'Phòng trọ 13', price: 35000000, area: 65, address: 'Đống Đa', image: 'https://file4.batdongsan.com.vn/2023/10/20/20231020163004-af23_wm.jpg' },
        { id: 14, name: 'Phòng trọ 14', price: 3800000, area: 30, address: 'Thanh Xuân', image: 'https://file4.batdongsan.com.vn/2023/07/06/20230706153627-ac08_wm.jpg' },
        { id: 15, name: 'Phòng trọ 15', price: 40000000, area: 50, address: 'Ba Đình', image: 'https://file4.batdongsan.com.vn/2023/10/20/20231020163017-68d3_wm.jpg' },
    ];

    const itemsPerPage = 3;
    let currentPage = 1;
    const totalPages = Math.ceil(listings.length / itemsPerPage);

    function renderListings(page, filteredListings = null) {
        const listingsContainer = document.querySelector('.listings');
        listingsContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToRender = filteredListings ? filteredListings.slice(start, end) : listings.slice(start, end);

        itemsToRender.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
                <img src="${listing.image}" alt="${listing.name}">
                <h3>${listing.name}</h3>
                <p>Giá: ${listing.price.toLocaleString()} VND</p>
                <p>Diện tích: ${listing.area} m2</p>
                <p>Địa chỉ: ${listing.address}</p>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    function renderPagination(totalPages) {
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = '';
        const prevPage = document.createElement('a');
        prevPage.href = '#';
        prevPage.classList.add('prev-page');
        prevPage.innerHTML = '&laquo;';
        prevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderListings(currentPage);
                updatePagination(totalPages);
            }
        });
        paginationContainer.appendChild(prevPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.classList.add('page-link');
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLink.textContent = i;
            pageLink.addEventListener('click', () => {
                currentPage = i;
                renderListings(currentPage);
                updatePagination(totalPages);
            });
            paginationContainer.appendChild(pageLink);
        }

        const nextPage = document.createElement('a');
        nextPage.href = '#';
        nextPage.classList.add('next-page');
        nextPage.innerHTML = '&raquo;';
        nextPage.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderListings(currentPage);
                updatePagination(totalPages);
            }
        });
        paginationContainer.appendChild(nextPage);
    }

    function updatePagination(totalPages) {
        const pageLinks = document.querySelectorAll('.page-link');
        pageLinks.forEach(link => {
            link.classList.remove('active');
            if (parseInt(link.textContent) === currentPage) {
                link.classList.add('active');
            }
        });
    }

    document.querySelector('#price-range').addEventListener('change', function() {
        const selectedPriceRange = this.value;
        const selectedArea = document.querySelector('#area-range').value;
        const selectedLocation = document.querySelector('#location-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);

        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });

    document.querySelector('#area-range').addEventListener('change', function() {
        const selectedArea = this.value;
        const selectedPriceRange = document.querySelector('#price-range').value;
        const selectedLocation = document.querySelector('#location-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);

        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });

    document.querySelector('#location-range').addEventListener('change', function() {
        const selectedLocation = this.value;
        const selectedPriceRange = document.querySelector('#price-range').value;
        const selectedArea = document.querySelector('#area-range').value;
        let filteredListings = filterListings(selectedPriceRange, selectedArea, selectedLocation);
    
        const newTotalPages = Math.ceil(filteredListings.length / itemsPerPage);
        currentPage = 1;
        renderListings(currentPage, filteredListings);
        renderPagination(newTotalPages);
    });
    
    

    function filterListings(priceRange, areaRange, locationRange) {
        let filtered = listings;

        if (priceRange !== 'all') {
            const [minPrice, maxPrice] = priceRange.split('-').map(Number);
            filtered = filtered.filter(listing => listing.price >= minPrice && listing.price <= maxPrice);
        }

        if (areaRange !== 'all') {
            const [minArea, maxArea] = areaRange.split('-').map(Number);
            filtered = filtered.filter(listing => listing.area >= minArea && listing.area <= maxArea);
        }

        if (locationRange !== 'all') {
            filtered = filtered.filter(listing => listing.address == locationRange);
        }

        return filtered;
    }

    renderListings(currentPage);
    renderPagination(totalPages);
});
// Mở modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Đóng modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Xử lý đăng nhập
function handleLogin(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng nhập
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Đây là nơi bạn có thể thêm logic xác thực, ví dụ kiểm tra email/password hợp lệ
    // Tạm thời in ra console để kiểm tra
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('loginModal');
}

// Xử lý đăng ký
function handleRegister(event) {
    event.preventDefault(); // Ngăn form submit lại

    // Lấy giá trị từ form đăng ký
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Đây là nơi bạn có thể thêm logic lưu thông tin người dùng vào cơ sở dữ liệu
    // Tạm thời in ra console để kiểm tra
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Sau khi xử lý xong, có thể đóng modal
    closeModal('registerModal');
}

// Lắng nghe sự kiện submit form đăng nhập và đăng ký
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('registerForm').addEventListener('submit', handleRegister);
