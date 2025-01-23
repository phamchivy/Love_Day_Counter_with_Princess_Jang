function updateTimer() {
    const startDate = new Date("2024-12-21T18:00:00");
    const now = new Date();

    const difference = Math.abs(now - startDate);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Cập nhật timer mỗi giây
setInterval(updateTimer, 1000);

// Khởi chạy ngay khi tải trang
updateTimer();

// Lấy tất cả các video tự động phát
const videos = document.querySelectorAll('.auto-play-video');

// Sử dụng IntersectionObserver để theo dõi vị trí của video
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
            video.play(); // Phát video khi xuất hiện trong màn hình
            video.muted = false; // Bật âm thanh khi video vào khung nhìn
            video.classList.add('playing'); // Thêm class khi video đang phát
        } else {
            video.pause(); // Dừng video khi ra khỏi khung nhìn
            video.muted = true; // Tắt âm thanh
            video.classList.remove('playing'); // Thêm class khi video đang phát
        }
    });
},
        { threshold: 0.7 }
);

// Gắn observer vào mỗi video
videos.forEach((video) => observer.observe(video));


