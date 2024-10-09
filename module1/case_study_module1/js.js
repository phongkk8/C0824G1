class Question {
    content;
    image;
    optionsA;
    optionsB;
    optionsC;
    correctAnswer;

    constructor(content, image, optionsA, optionsB, optionsC, correctAnswer) {
        this.content = content;
        this.optionsA = optionsA;
        this.optionsB = optionsB;
        this.optionsC = optionsC;
        this.image = image;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

let questions1 = new Question("Câu 1:Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?", "https://lythuyet.onthigplx.vn/images/onthigplx_vn__q487.webp", "A. Xe tải, mô tô, xe khách, xe con.", "B. Xe khách, xe tải, xe con, mô tô.", "C. Mô tô, xe khách, xe tải, xe con.", "A")
let questions2 = new Question("Câu 2:Quy tắc nhường đường cho xe ưu tiên là gì?", "", "A. Nhường cho xe tải", "B. Nhường cho xe cứu thương, xe cảnh sát", "C. Không cần nhường", "B")
let questions3 = new Question("Câu 3:Đường một chiều là gì?", "", "A. Đường chỉ cho phép đi một chiều", "B. Đường có thể đi hai chiều", "C. Đường không có quy định", "A")
let questions4 = new Question("Câu 4:Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?", "https://lythuyet.onthigplx.vn/images/onthigplx_vn__q490.webp", "A. Xe tải, xe con, mô tô.", "B. Mô tô, xe con, xe tải.", "C. Xe con, mô tô, xe tải.", "B")
let questions5 = new Question("Câu 5:Tốc độ tối đa cho xe ô tô trên đường đô thị là bao nhiêu?", "", "A. 40 km/h", "B. 60 km/h", "C. 80 km/h", "B")
let questions6 = new Question("Câu 6:Khi nào phải dừng xe?", "", "A. Khi có người đi bộ", "B. Khi có đèn xanh", "C. Khi không có xe khác", "A")
let questions7 = new Question("Câu 7:Quy tắc khi tham gia giao thông tại ngã tư là gì?", "", "A. Nhường cho xe bên trái", "B. Nhường cho xe bên phải", "C. Nhường cho xe ưu tiên", "C")
let questions8 = new Question("Câu 8:Khi nào cần bật đèn pha?", "", "A. Ban ngày", "B. Ban đêm hoặc trời mưa", "C. Khi có xe đi ngược chiều", "B")
let questions9 = new Question("Câu 9:Cách xử lý khi gặp tình huống khẩn cấp trên đường là gì?", "", "A. Tăng tốc", "B. Giảm tốc và quan sát", "C. Đánh lái mạnh", "B")
let questions10 = new Question("Câu 10:Phải làm gì khi xe phía trước dừng đột ngột?", "", "A. Đánh lái sang bên", "B. Dừng lại an toàn", "C. Bấm còi", "B")
let questions11 = new Question("Câu 11:Độ tuổi tối thiểu để lái xe ô tô là:", "", "A. 18 tuổi", "B. 20 tuổi", "C. 21 tuổi", "A")
let questions12 = new Question("Câu 12:Lái xe khi say rượu sẽ dẫn đến:", "", "A. Tăng khả năng tập trung", "B. Giảm khả năng phản xạ", "C. Không ảnh hưởng", "B")
let questions13 = new Question("Câu 13:Tại sao không được sử dụng điện thoại khi lái xe?", "", "A. Làm phân tâm", "B. Không có quy định", "C. Chỉ được sử dụng tai nghe", "A")
let questions14 = new Question("Câu 14:Khi nào cần giảm tốc độ?", "", "A. Khi vào đường hẹp", "B. Khi đi qua khu đông dân cư", "C. Cả hai ý trên", "C")
let questions15 = new Question("Câu 15:Phải làm gì khi thấy xe cứu thương đang phát tín hiệu?", "", "A. Dừng lại và nhường đường", "B. Tiếp tục đi", "C. Chạy nhanh hơn", "A")
let questions16 = new Question("Câu 16:Khi gặp người đi bộ trên đường, người lái xe cần:", "", "A. Tiếp tục đi", "B. Giảm tốc độ và nhường đường", "C. Tăng tốc", "B")
let questions17 = new Question("Câu 17:Khi nào cần sử dụng gương chiếu hậu?", "", "A. Khi rẽ hoặc lùi", "B. Khi lái thẳng", "C. Không cần thiết", "A")
let questions18 = new Question("Câu 18:Phải làm gì nếu phát hiện có sự cố trên đường?", "", "A. Bỏ chạy", "B. Thông báo cho cơ quan chức năng", "C. Tiếp tục đi", "B")
let questions19 = new Question("Câu 19:Nguyên tắc lái xe an toàn là gì?", "", "A. Chỉ lái nhanh", "B. Giữ khoảng cách an toàn với xe phía trước", "C. Không cần quan sát", "B")
let questions20 = new Question("Câu 20:Lái xe trong điều kiện thời tiết xấu cần:", "", "A. Tăng tốc", "B. Giảm tốc và tăng cường cảnh giác", "C. Không cần thay đổi", "B")

document.getElementById("start-timer").addEventListener("click", function () {
    document.getElementById("hidden").style.display = "block";
    this.style.display = "none";
})
document.getElementById("start-timer").addEventListener("click", startQuiz)
document.getElementById("view-results").addEventListener("click", endQuiz)
document.getElementById("submit-answer").addEventListener("click", checkSelect)
document.getElementById("reset").addEventListener("click", restart)

let questions = [questions1, questions2, questions3, questions4, questions5, questions6, questions7, questions8, questions9, questions10, questions11, questions12, questions13, questions14, questions15, questions16, questions17, questions18, questions19, questions20];
let score = 0;
let totalQuestions = questions.length;

let timeLeft = 900;
let countdownElement = document.getElementById('time');

let countdownTimer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Định dạng phút và giây
    countdownElement.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Hết thời gian!";
        alert("Hết giờ!")
        showResult()
    }
    timeLeft--;
}, 1000);


function startQuiz() {
    timeLeft = 900
    countdownElement.innerHTML = "15:00";
    score = 0;
    displayQuestion();
}

let index = 0

function displayQuestion() {
    if (index <= questions.length) {
        document.getElementById("question").innerHTML = questions[index].content
        if (questions[index].image) {
            document.getElementById("img").style.display="block";
            document.getElementById("img").src = questions[index].image;
        } else {
             //document.getElementById("img").src = "";
           document.getElementById("img").style.display="none";
        }
        document.getElementById("option-a").innerHTML = questions[index].optionsA
        document.getElementById("option-b").innerHTML = questions[index].optionsB
        document.getElementById("option-c").innerHTML = questions[index].optionsC

        document.querySelector('input[name="answer"]:checked').checked = false;
    }
}

function checkSelect(selectedAnswer) {
    selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (questions[index].checkAnswer(selectedAnswer)) {
        score++;
        document.getElementById("score").innerHTML = score;
    }
    index++;
    document.getElementById("answered").innerHTML = index;
    displayQuestion();
}

function endQuiz() {
    let isConfirm = confirm("Bạn có thực sự muốn nộp bài???")
    if (isConfirm) {
        clearInterval(countdownTimer);
        showResult();
    }
}

function showResult() {
    if (score < 15) {
        alert("Không đạt!!!")
    } else {
        alert("Xuất sắc!!!")
    }
    alert("Điểm số của bạn là " + score + "/" + totalQuestions);
}

function restart(){
    location.reload();
}
