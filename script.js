function updateTimer() {
    const startDate = new Date("2024-12-21T18:00:00"); // Lấy thời gian hiện tại
    const endDate = new Date("2025-01-25T20:40:00"); // Thời gian kết thúc

    const difference = endDate - startDate; // Tính khoảng cách thời gian

    // Tính số ngày, giờ, phút, giây
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Hiển thị kết quả
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Cập nhật đồng hồ đếm ngược mỗi giây
setInterval(updateTimer, 1000);

// Khởi chạy đồng hồ ngay khi tải trang
updateTimer();

// Lấy tất cả các video tự động phát
const videos = document.querySelectorAll('.auto-play-video');

// Tự động phát và dừng video dựa trên khung nhìn
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.muted = true;  // Bắt buộc tắt âm thanh để autoplay
            video.play();        // Phát video khi vào khung nhìn
            video.classList.add('playing'); // Thêm class khi video đang phát
        } else {
            video.pause();       // Dừng video khi ra khỏi khung nhìn
            video.classList.remove('playing'); // Thêm class khi video đang phát
        }
    });
}, { threshold: 0.7 }

);

// Gắn observer vào mỗi video
videos.forEach(
    (video) => {
        observer.observe(video)
        video.addEventListener('click', () => {
            video.muted = false; // Bật âm thanh
        });
    });

