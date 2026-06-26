document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");
    const menuItems = document.querySelectorAll(".sidebar-menu ul li");

    // Hàm mở Sidebar
    const openSidebar = () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    };

    // Hàm đóng Sidebar
    const closeSidebar = () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    };

    // Lắng nghe sự kiện click từ các phần tử điều khiển
    openBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Xử lý chuyển đổi thanh trạng thái hoạt động (Active State)
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // Loại bỏ class active hiện tại của phần tử cũ
            document.querySelector(".sidebar-menu ul li.active")?.classList.remove("active");
            // Thêm class active vào phần tử vừa click
            this.classList.add("active");

            // Nếu người dùng đang dùng thiết bị di động (màn hình nhỏ hơn 1024px), 
            // tự động đóng thanh sidebar sau khi họ chọn menu xong.
            if (window.innerWidth < 1024) {
                closeSidebar();
            }
        });
    });
});