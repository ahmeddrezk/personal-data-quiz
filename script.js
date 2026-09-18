const rawQuestions = [
  {
    question: "أي مما يلي يُعد من البيانات الشخصية الأساسية؟",
    answers: [
      "بصمة قزحية العين",
      "البيانات الجينية",
      "تاريخ الميلاد",
      "الحالة الصحية",
    ],
    correct: 2,
  },
  {
    question: "تُصنف بصمة الإصبع أو قزحية العين ضمن البيانات الشخصية ......",
    answers: ["الأساسية", "العامة", "الحساسة (البيومترية)", "التجارية"],
    correct: 2,
  },
  {
    question:
      "تنص المادة رقم ...... من الدستور المصري على كفالة الحق في الخصوصية وحماية الحياة الخاصة من أي تدخل غير مشروع.",
    answers: ["45", "57", "60", "75"],
    correct: 1,
  },
  {
    question: "يُعد جواز السفر ورخصة القيادة من أمثلة ......",
    answers: [
      "البيانات الحساسة",
      "أرقام الهوية الشخصية",
      "البيانات البيومترية",
      "البيانات الجينية",
    ],
    correct: 1,
  },
  {
    question:
      "الوثيقة الرسمية التي تنشرها الشركة لتوضيح كيفية جمع ومعالجة وحماية بيانات العملاء تُسمى ......",
    answers: [
      "ترخيص العمل",
      "حقوق الصورة",
      "سياسة الخصوصية (Privacy Policy)",
      "عقد الاستخدام",
    ],
    correct: 2,
  },
  {
    question:
      "النظام الذي يشترط موافقة المستخدم الصريحة (مثل الضغط على زر 'أوافق') قبل جمع بياناته يُسمى ......",
    answers: [
      "نظام الاعتراض",
      "نظام الموافقة المسبقة",
      "الحق في الخصوصية",
      "التحقيق الرسمي",
    ],
    correct: 1,
  },
  {
    question: "يتيح نظام الاعتراض (Objection System) للمستخدم ......",
    answers: [
      "إيقاف معالجة بياناته أو الإعلانات مع استمرار الخدمة العادية",
      "حرمان المستخدم من استخدام الخدمة تماماً",
      "التعديل في قوانين الدولة",
      "إغلاق حسابه البنكي",
    ],
    correct: 0,
  },
  {
    question:
      "الحق الذي يحمي المصالح الاقتصادية للمشاهير ويمنع استغلال صورهم أو أصواتهم في الإعلانات دون إذن يُعرف بـ ......",
    answers: [
      "حقوق الملكية الفكرية",
      "حقوق الصورة",
      "حقوق الدعاية",
      "حق الخصوصية العام",
    ],
    correct: 2,
  },
  {
    question:
      "من الحالات الاستثنائية التي يُسمح فيها بمشاركة البيانات الشخصية دون موافقة صريحة من صاحبها ......",
    answers: [
      "الأغراض الترفيهية",
      "الفضول الشخصي",
      "حماية الأمن القومي أو تنفيذ حكم محكمة",
      "مشاركة البيانات مع الجيران",
    ],
    correct: 2,
  },
  {
    question:
      "الحصول على ترخيص مركز حماية البيانات الشخصية يُساعد المنظمات على ......",
    answers: [
      "منع الشركات الوهمية والتأكد من الالتزام بالقانون",
      "نشر بيانات العملاء مجاناً",
      "زيادة أسعار الخدمات",
      "إلغاء سياسة الخصوصية",
    ],
    correct: 0,
  },
  {
    question:
      "إذا ظهر أكثر من شخص في صورة واحدة، فإن نشرها أو استخدامها يتطلب موافقة ......",
    answers: [
      "شخص واحد فقط منهم",
      "المصور فقط",
      "جميع الأشخاص الظاهرين في الصورة",
      "لا يتطلب موافقة أحد",
    ],
    correct: 2,
  },
  {
    question:
      "أي من البيانات التالية يُعتبر من البيانات الحساسة التي محتاجة حماية أكبر لأنها قد تسبب تمييزاً أو ضرراً لصاحبها؟",
    answers: [
      "الاسم بالكامل",
      "العنوان السكني",
      "الحالة الصحية والديانات والعرق",
      "تاريخ الميلاد",
    ],
    correct: 2,
  },
  {
    question:
      "القاعدة الأساسية في قانون حماية البيانات الشخصية تمنع أي جهة من جمع أو استخدام بياناتك إلا بـ ......",
    answers: ["موافقة ضمنية", "موافقة صريحة منك", "إذن الجيران", "دون علمك"],
    correct: 1,
  },
  {
    question: "تُعرف حقوق الصورة بأنها ......",
    answers: [
      "حق الفرد في منع الآخرين من تصويره أو استخدام صورته دون إذنه",
      "حق استغلال صور الآخرين تجارياً",
      "حق نشر صور المشاهير دون إذن",
      "تسجيل الاختراعات",
    ],
    correct: 0,
  },
  {
    question:
      "البيانات الشخصية هي كل معلومة تمكّن من تحديد هوية الشخص الطبيعي بشكل ......",
    answers: ["مباشر فقط", "غير مباشر فقط", "مباشر أو غير مباشر", "غير ممكن"],
    correct: 2,
  },
  {
    question: "يُعتبر الرقم القومي مثالاً على ......",
    answers: [
      "البيانات الحساسة جداً",
      "أرقام الهوية الشخصية",
      "البيانات البيومترية",
      "حقوق الدعاية",
    ],
    correct: 1,
  },
  {
    question: "تهدف سياسة الخصوصية إلى الإجابة عن عدة تساؤلات منها ......",
    answers: [
      "أسماء جميع الموظفين في الشركة",
      "إزاي الشركة بتجمع البيانات وليه بتجمعها وإزاي بتحافظ عليها",
      "مواعيد أوقات فراغ العملاء",
      "أرباح الشركة السنوية",
    ],
    correct: 1,
  },
  {
    question:
      "أي مما يلي لا يُعد من الاستثناءات المسموح فيها بمعالجة البيانات دون موافقة؟",
    answers: [
      "إنقاذ حياة شخص أو حماية صحته",
      "تنفيذ عقد ضروري بين الشركة والمستخدم",
      "الأغراض الترفيهية والإعلانية العامة",
      "وجود نص قانوني أو لائحة",
    ],
    correct: 2,
  },
  {
    question: "تشمل البيانات الأساسية للشخص كل مما يلي ما عدا ......",
    answers: ["الاسم", "النوع", "البيانات الجينية", "العنوان"],
    correct: 2,
  },
  {
    question: "يتيح نظام الموافقة المسبقة للمستخدم معرفة ......",
    answers: [
      "سبب جمع بياناته ومن سيراها وكيف ستُستخدم",
      "كيفية إلغاء شريحة الهاتف",
      "أسرار الشركات المنافسة",
      "كيفية تصوير الآخرين دون إذن",
    ],
    correct: 0,
  },
  {
    question:
      "صح أم خطأ: يتيح نظام الاعتراض (Objection System) للشركة حرمان المستخدم من استخدام الخدمة تماماً إذا رفض معالجة بياناته.",
    answers: ["صح", "غلط"],
    correct: 1,
  },
  {
    question:
      "صح أم خطأ: الحصول على ترخيص رسمي من 'مركز حماية البيانات' بالدولة يُعد شرطاً لضمان التزام الشركات بالقوانين ومنع الشركات الوهمية.",
    answers: ["صح", "غلط"],
    correct: 0,
  },
  {
    question:
      "صح أم خطأ: تُعتبر بصمة الإصبع وقزحية العين والبيانات الجينية من أمثلة البيانات الشخصية الأساسية.",
    answers: ["صح", "غلط"],
    correct: 1,
  },
  {
    question:
      "صح أم خطأ: يُجيز قانون حماية البيانات مشاركة بيانات الفرد دون موافقته الصريحة في بعض الحالات الاستثنائية كإنقاذ حياته أو تنفيذ أحكام المحاكم.",
    answers: ["صح", "غلط"],
    correct: 0,
  },
  {
    question:
      "صح أم خطأ: تُوفر 'حقوق الدعاية' الحماية للمصالح الاقتصادية للمشاهير لمنع استغلال أسمائهم أو أصواتهم في الإعلانات دون إذنهم.",
    answers: ["صح", "غلط"],
    correct: 0,
  },
];

// دالة لخلط المصفوفة عشوائياً (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// تجهيز الأسئلة والإجابات وخلطهم
let questions = [];
rawQuestions.forEach((q) => {
  let answersObjs = q.answers.map((ans, idx) => ({
    text: ans,
    isCorrect: idx === q.correct,
  }));
  shuffleArray(answersObjs); // خلط الإجابات
  questions.push({
    question: q.question,
    answers: answersObjs,
  });
});
shuffleArray(questions); // خلط الأسئلة

let currentQuestion = 0;
let score = 0;
let studentName = "";
let selectedAnswerIndex = null;
let isAnswerSubmitted = false;

// التايمر (20 دقيقة = 1200 ثانية)
let timeLeft = 1200;
let timerInterval;

const startScreen = document.getElementById("start-screen");
const startForm = document.getElementById("start-form");
const studentNameInput = document.getElementById("student-name");
const quizContent = document.getElementById("quiz-content");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const numberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const progress = document.getElementById("progress");
const resultBox = document.getElementById("result");
const finalScore = document.getElementById("final-score");
const notificationStatus = document.getElementById("notification-status");
const timerElement = document.getElementById("timer");

async function sendCompletionNotification() {
  notificationStatus.textContent = "جاري إرسال النتيجة...";
  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/ahmedrezkramadan@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `نتيجة اختبار البيانات الشخصية من ${studentName}`,
          name: studentName,
          score: `${score} من ${questions.length}`,
          _template: "table",
          _captcha: "false",
        }),
      },
    );
    if (!response.ok) throw new Error("Notification request failed");
    notificationStatus.textContent = "تم إرسال النتيجة إلى الباشمهندس احمد.";
  } catch (error) {
    notificationStatus.textContent =
      "ظهرت النتيجة، لكن تعذر إرسال الرسالة تلقائيًا.";
  }
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  if (timeLeft <= 60) {
    timerElement.classList.add("danger");
  }
}

function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  const q = questions[currentQuestion];
  isAnswerSubmitted = false;
  selectedAnswerIndex = null;

  nextButton.disabled = true;
  nextButton.textContent = "تأكيد الإجابة";
  questionElement.innerHTML = q.question;
  answersElement.innerHTML = "";
  numberElement.innerHTML = `السؤال ${currentQuestion + 1} من ${questions.length}`;
  progress.style.width = `${(currentQuestion / questions.length) * 100}%`;

  q.answers.forEach((answerObj, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.innerHTML = answerObj.text;
    button.onclick = () => selectAnswer(button, index);
    answersElement.appendChild(button);
  });
}

function selectAnswer(button, index) {
  if (isAnswerSubmitted) return; // منع التغيير بعد التأكيد

  // إزالة التظليل من كل الأزرار وتظليل الزر المختار
  document
    .querySelectorAll(".answer")
    .forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");

  selectedAnswerIndex = index;
  nextButton.disabled = false; // تفعيل زر التأكيد
}

nextButton.onclick = function () {
  if (nextButton.disabled) return;

  if (!isAnswerSubmitted) {
    // مرحلة التأكيد وتصحيح الإجابة
    isAnswerSubmitted = true;
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer");

    // إيقاف الضغط على الأزرار
    buttons.forEach((btn) => (btn.disabled = true));

    const isCorrect = q.answers[selectedAnswerIndex].isCorrect;

    if (isCorrect) {
      buttons[selectedAnswerIndex].classList.add("correct");
      score++;
      scoreElement.innerHTML = `الدرجة: ${score}`;
    } else {
      buttons[selectedAnswerIndex].classList.add("wrong");
      // تلوين الإجابة الصحيحة
      const correctIndex = q.answers.findIndex((ans) => ans.isCorrect);
      buttons[correctIndex].classList.add("correct");
    }

    nextButton.textContent = "السؤال التالي";
  } else {
    // مرحلة الانتقال للسؤال التالي
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
};

function endQuiz() {
  clearInterval(timerInterval); // إيقاف التايمر
  document.querySelector(".quiz-container").style.display = "none";
  resultBox.style.display = "block";
  finalScore.textContent = `${studentName}، حصلت على ${score} من ${questions.length}`;
  progress.style.width = "100%";
  sendCompletionNotification();
}

startForm.onsubmit = function (event) {
  event.preventDefault();
  studentName = studentNameInput.value.trim();
  if (!studentName) {
    studentNameInput.focus();
    return;
  }
  startScreen.hidden = true;
  quizContent.hidden = false;
  startTimer();
  loadQuestion();
};
