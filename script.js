const rawQuestions = [
  // أسئلة الاختيار من متعدد
  {
    question:
      "إذا طلبت إحدى المنصات الرقمية الاحتفاظ بـ التسجيلات الصوتية ومقاطع الفيديو الخاصة بك، فإن هذه البيانات تُصنف وفقاً للدرس على أنها:",
    answers: [
      "بيانات غير شخصية",
      "بيانات شخصية",
      "بيانات حكومية عامة",
      "أرقام هوية رسمية",
    ],
    correct: 1,
  },
  {
    question:
      "تُعد الحالة النفسية والصحية من البيانات الشخصية الحساسة، والسبب الرئيسي في فرض حماية مشددة عليها هو أنها قد تسبب:",
    answers: [
      "زيادة في الرسائل الإعلانية",
      "تمييزاً أو ضرراً لصاحبها",
      "إلغاء رخصة القيادة",
      "فقدان الهوية الرقمية",
    ],
    correct: 1,
  },
  {
    question:
      "في حالة وجود خطورة على حياة فرد وتطلّب الأمر الوصول العاجل لسجله الطبي، يتيح القانون ذلك تحت استثناء:",
    answers: [
      "الأغراض التجارية",
      "إنقاذ حياة شخص أو حماية صحته",
      "الحصول على ترخيص مركز البيانات",
      "تطبيق حقوق الصورة",
    ],
    correct: 1,
  },
  {
    question:
      "إذا كان تقديم بياناتك الشخصية شرطاً أساسياً لتنسيق وإتمام عقد مبرم بينك وبين الشركة، فإن القانون يسمح بمعالجة البيانات:",
    answers: [
      "دون الحاجة لموافقة صريحة جديدة ضمن الحالات الاستثنائية",
      "بشرط تعديل سياسة الخصوصية",
      "بعد موافقة الجيران",
      "فقط للمشاهير",
    ],
    correct: 0,
  },
  {
    question:
      "يُسمح للجهات المختصة بجمع البيانات ومعالجتها دون إذن مسبق في حال وجود:",
    answers: [
      "رغبة من أصدقاء الفرد",
      "حكم محكمة أو تحقيق رسمي",
      "منشور ترفيهي على وسائل التواصل",
      "استبيان عام غير رسمي",
    ],
    correct: 1,
  },
  {
    question:
      "أي من التساؤلات التالية تُجيب عنه وثيقة 'سياسة الخصوصية' (Privacy Policy) المنشورة على المواقع؟",
    answers: [
      "ما هي أرباح الشركة في العام الماضي؟",
      "كيف تحافظ الشركة على سرية البيانات وتمنع تسريبها؟",
      "ما هي أوقات فراغ العملاء؟",
      "كيف يمكن للعميل تعديل القوانين؟",
    ],
    correct: 1,
  },
  {
    question:
      "الهدف التنظيمي الأول من إلزام الشركات بالحصول على تصريح من 'مركز حماية البيانات' بالدولة هو:",
    answers: [
      "منع الشركات الوهمية أو النصابة من استغلال بيانات الناس",
      "إتاحة نشر الصور مجاناً",
      "إيقاف تشغيل شبكات الاتصال",
      "إلغاء العقود بين الشركات والعملاء",
    ],
    correct: 0,
  },
  {
    question:
      "في 'نظام الموافقة المسبقة'، يمكن للمستخدم إعطاء موافقته الصريحة للشركة عن طريق:",
    answers: [
      "التخمين الآلي من التطبيق",
      "الضغط على زر 'أوافق' أثناء التسجيل أو التوقيع على استمارة",
      "تجاهل الرسائل النصية",
      "استخدام الهاتف دون الاتصال بالإنترنت",
    ],
    correct: 1,
  },
  {
    question:
      "إذا بدأت شركة اتصالات في إرسال إعلانات SMS لا ترغب فيها، فما الآلية التي تضمن لك إيقاف الإعلانات مع استمرار عمل الخدمة بشكل عادي؟",
    answers: [
      "نظام الاعتراض",
      "حقوق الدعاية للمشاهير",
      "الترخيص المسبق",
      "حق الملكية الفكرية",
    ],
    correct: 0,
  },
  {
    question:
      "عند التقاط صورة جماعية تضم 4 أصدقاء، فإن شرط نشرها أو استخدامها وفقاً لـ حقوق الصورة هو:",
    answers: [
      "موافقة صاحب الكاميرا فقط",
      "موافقة أحدهم فقط",
      "موافقة جميع الأشخاص الظاهرين في الصورة",
      "عدم الحاجة لأي موافقة",
    ],
    correct: 2,
  },
  {
    question:
      "تُعتبر المصلحة العامة والحفاظ على الأمن القومي من الدواعي التي تبيح:",
    answers: [
      "معالجة البيانات واستخدامها استثناءً دون موافقة صريحة",
      "بيع البيانات للشركات الوهمية",
      "إلغاء الدستور",
      "منع استخدام بطاقات الرقم القومي",
    ],
    correct: 0,
  },
  {
    question:
      "الغاية الأساسية من تطبيق نظام الموافقة المسبقة قبل جمع البيانات هي:",
    answers: [
      "معرفة المستخدم لسبب جمع بياناته ومَن سيطلع عليها وكيف ستُستخدم",
      "حرمان المستخدم من استخدام الخدمة",
      "نشر بيانات المستخدم في الصحف",
      "جمع البيانات البيومترية مجاناً",
    ],
    correct: 0,
  },
  {
    question:
      "ينظم قانون حماية البيانات الشخصية العمليات التالية المتعلقة بالبيانات:",
    answers: [
      "الجمع والمعالجة والتخزين والنقل",
      "الطباعة والتلوين فقط",
      "البيع للمزادات العلنية",
      "الحذف التلقائي اليومي",
    ],
    correct: 0,
  },
  {
    question: "تندرج 'رخصة القيادة' تنظيميّاً تحت فئة:",
    answers: [
      "البيانات الحساسة البيومترية",
      "أرقام الهوية الشخصية",
      "حقوق الدعاية",
      "الاستثناءات القانونية",
    ],
    correct: 1,
  },
  {
    question: "تمنع 'حقوق الدعاية' استغلال أصوات أو أسماء أو صور المشاهير في:",
    answers: [
      "الإعلانات أو الأغراض التجارية دون إذن",
      "التحقيقات الرسمية وأحكام المحاكم",
      "السجلات الحيوية للمستشفيات",
      "معاملات البنوك الحكومية",
    ],
    correct: 0,
  },
  {
    question:
      "أي معلومة تتيح الاستدلال على هوية شخص بعينه بشكل غير مباشر تُعتبر:",
    answers: [
      "بيانات شخصية",
      "بيانات عامة غير محمية",
      "خارج نطاق القوانين",
      "بيانات بيومترية حتماً",
    ],
    correct: 0,
  },
  {
    question:
      "الرابط الذي يظهر أسفل المواقع والتطبيقات باسم Privacy Policy يمثل:",
    answers: [
      "سياسة الخصوصية الخاصة بالشركة",
      "عقد شراء الأسهم",
      "ترخيص مركز حماية البيانات",
      "لائحة الأمن القومي",
    ],
    correct: 0,
  },
  {
    question: "تهدف الآليات التنظيمية لحماية البيانات في المنظمات إلى تحقيق:",
    answers: [
      "حماية بيانات الأفراد واحترام خصوصيتهم والالتزام بالقانون",
      "نشر الأرقام القومية للعلن",
      "حظر الاتصال بالإنترنت",
      "تصوير العملاء دون معرفتهم",
    ],
    correct: 0,
  },
  {
    question: "تُصنف 'البيانات الجينية' ضمن فئة:",
    answers: [
      "البيانات الأساسية",
      "أرقام الهوية",
      "البيانات الحساسة",
      "حقوق الدعاية",
    ],
    correct: 2,
  },
  {
    question:
      "عندما يعترض المستخدم على معالجة بياناته عبر نظام الاعتراض، يترتب على الشركة:",
    answers: [
      "التوقف عن معالجة البيانات مع استمرار تقديم الخدمة العادية للمستخدم",
      "حظر الحساب فوراً",
      "مسح قاعدة بيانات النظام",
      "فرض رسوم إلغاء",
    ],
    correct: 0,
  },

  // أسئلة الصواب والخطأ
  {
    question:
      "صح أم خطأ: لا تُعتبر التسجيلات الصوتية ومقاطع الفيديو من البيانات الشخصية لأنها غير مكتوبة في وثيقة رسمية.",
    answers: ["صح", "غلط"],
    correct: 1,
  },
  {
    question:
      "صح أم خطأ: يُحظر على أي جهة معالجة البيانات الشخصية دون موافقة مسبقة مطلقاً وبدون وجود أي استثناءات قانونية.",
    answers: ["صح", "غلط"],
    correct: 1,
  },
  {
    question:
      "صح أم خطأ: يحق للمستخدم مطالبة الشركة بوقف معالجة بياناته عبر نظام الاعتراض حتى لو كان قد وافق في البداية عند التسجيل.",
    answers: ["صح", "غلط"],
    correct: 0,
  },
  {
    question:
      "صح أم خطأ: يحق لأي شركة جمع وتخزين بيانات العملاء بمجرد حصولها على السجل التجاري دون حاجة لتصريح من 'مركز حماية البيانات'.",
    answers: ["صح", "غلط"],
    correct: 1,
  },
  {
    question:
      "صح أم خطأ: استخدام صوت أو اسم شخصية شهيرة في إعلان تجاري دون إذن سابق يُعد انتهاكاً لـ 'حقوق الدعاية'.",
    answers: ["صح", "غلط"],
    correct: 0,
  },
];

/* ============================================
   LocalStorage Key - مفتاح مميز لهذا الكويز
   يُستخدم مفتاح فريد لمنع تداخل البيانات مع
   أي كويز آخر على نفس الدومين
   ============================================ */
const STORAGE_KEY = "personalDataQuiz_State";

// دالة لخلط المصفوفة عشوائياً (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* ============================================
   تجهيز الأسئلة والإجابات وخلطهم
   ============================================ */
let questions = [];
let currentQuestion = 0;
let score = 0;
let studentName = "";
let selectedAnswerIndex = null;
let isAnswerSubmitted = false;
let userAnswers = []; // مصفوفة لحفظ إجابات الطالب (index المختار لكل سؤال)
let tabSwitchCount = 0; // عدد مرات مغادرة التاب
let quizActive = false; // هل الاختبار قيد التشغيل حالياً؟

// التايمر (20 دقيقة = 1200 ثانية)
let timeLeft = 1200;
let timerInterval;

// DOM Elements
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
const gradeMessageEl = document.getElementById("grade-message");
const tabSwitchInfo = document.getElementById("tab-switch-info");
const reviewSection = document.getElementById("review-section");
const reviewCard = document.getElementById("review-card");
const reviewTitle = document.getElementById("review-title");
const reviewBtn = document.getElementById("review-btn");

const reviewPrevBtn = document.getElementById("review-prev");
const reviewNextBtn = document.getElementById("review-next");
const reviewBackBtn = document.getElementById("review-back");
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const cheatModal = document.getElementById("cheat-modal");
const cheatModalClose = document.getElementById("cheat-modal-close");
const modalSwitchCount = document.getElementById("modal-switch-count");

let reviewIndex = 0; // الفهرس الحالي في وضع المراجعة

/* ============================================
   Dark Mode Toggle - الوضع الليلي
   ============================================ */
function initTheme() {
  // التحقق من تفضيل المستخدم المحفوظ
  const savedTheme = localStorage.getItem("personalDataQuiz_Theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
    themeLabel.textContent = "الوضع الداكن";
  }
}

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("personalDataQuiz_Theme", "dark");
    themeLabel.textContent = "الوضع الداكن";
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("personalDataQuiz_Theme", "light");
    themeLabel.textContent = "الوضع الفاتح";
  }
});

/* ============================================
   LocalStorage - حفظ واستعادة التقدم
   يتم حفظ حالة الاختبار بالكامل لمنع فقدان
   التقدم عند عمل تحديث للصفحة (Refresh)
   ============================================ */
function saveProgress() {
  // حفظ حالة الاختبار الكاملة في localStorage
  const state = {
    studentName: studentName,
    timeLeft: timeLeft,
    currentQuestion: currentQuestion,
    score: score,
    questions: questions, // الأسئلة بترتيبها العشوائي
    userAnswers: userAnswers,
    tabSwitchCount: tabSwitchCount,
    quizActive: quizActive,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress() {
  // محاولة استعادة حالة الاختبار من localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return false;

  try {
    const state = JSON.parse(saved);
    // التحقق من أن البيانات المحفوظة صالحة
    if (
      !state.studentName ||
      !state.questions ||
      !Array.isArray(state.questions) ||
      !state.quizActive
    ) {
      clearProgress();
      return false;
    }

    studentName = state.studentName;
    timeLeft = state.timeLeft;
    currentQuestion = state.currentQuestion;
    score = state.score;
    questions = state.questions;
    userAnswers = state.userAnswers || [];
    tabSwitchCount = state.tabSwitchCount || 0;
    quizActive = state.quizActive;
    return true;
  } catch (e) {
    clearProgress();
    return false;
  }
}

function clearProgress() {
  // مسح بيانات التقدم عند إنهاء الاختبار
  localStorage.removeItem(STORAGE_KEY);
}

/* ============================================
   تهيئة الأسئلة (تجهيز جديد أو استعادة)
   ============================================ */
function prepareQuestions() {
  questions = [];
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
}

/* ============================================
   إرسال النتيجة عبر البريد الإلكتروني
   ============================================ */
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
          tabSwitches: `${tabSwitchCount} مرة خروج من التاب`,
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

/* ============================================
   مؤشرات الوقت البصرية - Timer Visual States
   يتغير لون التايمر حسب الوقت المتبقي:
   - عادي: أكثر من 5 دقائق
   - برتقالي (warning): 5 دقائق أو أقل
   - أحمر مع نبض (danger): دقيقة واحدة أو أقل
   ============================================ */
function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  // إزالة جميع حالات التايمر أولاً
  timerElement.classList.remove("warning", "danger");

  if (timeLeft <= 60) {
    // دقيقة واحدة أو أقل: أحمر مع تأثير نبض
    timerElement.classList.add("danger");
  } else if (timeLeft <= 300) {
    // 5 دقائق أو أقل: برتقالي
    timerElement.classList.add("warning");
  }
}

/* ============================================
   التايمر
   التايمر يستمر في العد حتى أثناء ظهور
   الـ Modal التحذيري (لمنع استغلال الخروج
   من التاب لإيقاف الوقت مؤقتاً)
   ============================================ */
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    // حفظ التقدم كل ثانية (لضمان دقة الوقت عند Refresh)
    saveProgress();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

/* ============================================
   تحميل وعرض السؤال
   ============================================ */
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
  scoreElement.innerHTML = `الدرجة: ${score}`;

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

    // حفظ إجابة الطالب في مصفوفة userAnswers
    userAnswers[currentQuestion] = selectedAnswerIndex;
    saveProgress();

    nextButton.textContent = "السؤال التالي";
  } else {
    // مرحلة الانتقال للسؤال التالي
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      saveProgress();
    } else {
      endQuiz();
    }
  }
};

/* ============================================
   رسائل التقييم المخصصة
   تعرض رسالة تفاعلية حسب درجة الطالب
   ============================================ */
function getGradeMessage(score) {
  if (score >= 20) {
    return { text: "خبير خصوصية 🏆", className: "grade-expert" };
  } else if (score >= 15) {
    return { text: "مستوى جيد 🌟", className: "grade-good" };
  } else {
    return { text: "تحتاج لمراجعة القوانين 📚", className: "grade-review" };
  }
}

/* ============================================
   إنهاء الاختبار
   ============================================ */
function endQuiz() {
  clearInterval(timerInterval); // إيقاف التايمر
  quizActive = false;

  document.querySelector(".quiz-container").style.display = "none";
  document.querySelector(".progress-area").style.display = "none";
  resultBox.style.display = "block";

  finalScore.textContent = `${studentName}، حصلت على ${score} من ${questions.length}`;
  progress.style.width = "100%";

  // عرض رسالة التقييم
  const grade = getGradeMessage(score);
  gradeMessageEl.textContent = grade.text;
  gradeMessageEl.className = `grade-message ${grade.className}`;

  // عرض عدد مرات مغادرة التاب
  if (tabSwitchCount > 0) {
    tabSwitchInfo.textContent = `⚠️ تم رصد خروجك من الصفحة ${tabSwitchCount} مرة أثناء الاختبار`;
  } else {
    tabSwitchInfo.textContent = "✅ لم يتم رصد أي خروج من الصفحة - أحسنت!";
  }

  // مسح بيانات التقدم من localStorage عند إنهاء الاختبار
  clearProgress();

  sendCompletionNotification();
}

/* ============================================
   وضع مراجعة الإجابات (Review Mode)
   يتم التنقل بين الأسئلة في وضع القراءة فقط
   عن طريق إخفاء وإظهار العناصر بـ JavaScript
   بدون إعادة تحميل الصفحة (Reload)
   ============================================ */
function renderReviewQuestion(index) {
  const q = questions[index];
  const userAnswer = userAnswers[index]; // فهرس الإجابة التي اختارها الطالب
  const isAnswered = userAnswer !== undefined && userAnswer !== null;

  // تحديد ما إذا كانت الإجابة صحيحة
  let isCorrectAnswer = false;
  if (isAnswered) {
    isCorrectAnswer = q.answers[userAnswer].isCorrect;
  }

  // بناء بطاقة المراجعة
  let html = "";

  // رقم السؤال
  html += `<div class="review-question-number">السؤال ${index + 1} من ${questions.length}</div>`;

  // حالة الإجابة (صح / خطأ / لم يُجب)
  if (!isAnswered) {
    html += `<span class="review-status-badge badge-skipped">⏭️ لم يُجب</span>`;
  } else if (isCorrectAnswer) {
    html += `<span class="review-status-badge badge-correct">✅ إجابة صحيحة</span>`;
  } else {
    html += `<span class="review-status-badge badge-wrong">❌ إجابة خاطئة</span>`;
  }

  // نص السؤال
  html += `<div class="review-question-text">${q.question}</div>`;

  // الإجابات
  html += `<div class="answers-container">`;
  q.answers.forEach((ansObj, i) => {
    let classes = "answer ";

    if (ansObj.isCorrect) {
      // الإجابة الصحيحة تظهر بالأخضر دائماً
      classes += "review-correct";
    } else if (isAnswered && i === userAnswer && !isCorrectAnswer) {
      // إجابة الطالب الخاطئة تظهر بالأحمر
      classes += "review-user-wrong";
    } else {
      // باقي الإجابات تظهر باهتة
      classes += "review-neutral";
    }

    html += `<button class="${classes}" disabled>${ansObj.text}</button>`;
  });
  html += `</div>`;

  reviewCard.innerHTML = html;
  reviewTitle.textContent = `مراجعة الإجابات - السؤال ${index + 1} من ${questions.length}`;

  // تحديث حالة أزرار التنقل
  reviewPrevBtn.disabled = index === 0;
  reviewNextBtn.disabled = index === questions.length - 1;
}

function enterReviewMode() {
  // إخفاء شاشة النتيجة وإظهار قسم المراجعة (بدون reload)
  resultBox.style.display = "none";
  reviewSection.style.display = "block";
  reviewIndex = 0;
  renderReviewQuestion(reviewIndex);
}

function exitReviewMode() {
  // إخفاء قسم المراجعة والعودة لشاشة النتيجة (بدون reload)
  reviewSection.style.display = "none";
  resultBox.style.display = "block";
}

reviewBtn.addEventListener("click", enterReviewMode);
reviewBackBtn.addEventListener("click", exitReviewMode);

reviewPrevBtn.addEventListener("click", function () {
  if (reviewIndex > 0) {
    reviewIndex--;
    renderReviewQuestion(reviewIndex);
  }
});

reviewNextBtn.addEventListener("click", function () {
  if (reviewIndex < questions.length - 1) {
    reviewIndex++;
    renderReviewQuestion(reviewIndex);
  }
});



/* ============================================
   نظام مكافحة الغش (Anti-Cheat System)
   يستخدم visibilitychange لرصد خروج الطالب
   من علامة التبويب أثناء الاختبار.
   
   ملاحظات مهمة:
   - التايمر يستمر في العد أثناء ظهور الـ Modal
     (لمنع الطالب من استغلال الخروج لإيقاف الوقت)
   - يتم تسجيل عدد مرات الخروج وعرضها في النتيجة
   - يتم إرسال عدد مرات الخروج مع النتيجة بالبريد
   ============================================ */
document.addEventListener("visibilitychange", function () {
  // التفعيل فقط أثناء الاختبار (ليس في شاشة البداية أو النتيجة)
  if (!quizActive) return;

  if (document.hidden) {
    // الطالب غادر علامة التبويب
    tabSwitchCount++;
    saveProgress(); // حفظ عدد مرات الخروج
  } else {
    // الطالب عاد لعلامة التبويب - عرض التحذير
    // التايمر لا يتوقف - يستمر في العد تلقائياً
    if (tabSwitchCount > 0) {
      modalSwitchCount.textContent = `عدد مرات الخروج: ${tabSwitchCount}`;
      cheatModal.classList.add("active");
    }
  }
});

// إغلاق Modal التحذير
cheatModalClose.addEventListener("click", function () {
  cheatModal.classList.remove("active");
});

/* ============================================
   تحسينات أمنية - منع الغش
   - تعطيل كليك يمين (Right Click) أثناء الاختبار
   - منع نسخ ولصق نص الأسئلة للبحث عنه
   - منع فتح أدوات المطور (DevTools) بالاختصارات
   ============================================ */

// 1. تعطيل كليك يمين أثناء الاختبار
document.addEventListener("contextmenu", function (e) {
  if (quizActive) {
    e.preventDefault();
  }
});

// 2. منع النسخ واللصق والقص أثناء الاختبار
["copy", "cut", "paste"].forEach(function (eventName) {
  document.addEventListener(eventName, function (e) {
    if (quizActive) {
      e.preventDefault();
    }
  });
});

// 3. منع تحديد النص أثناء الاختبار
document.addEventListener("selectstart", function (e) {
  // السماح بالتحديد فقط داخل حقل الإدخال (اسم الطالب)
  if (quizActive && e.target.tagName !== "INPUT") {
    e.preventDefault();
  }
});

// 4. منع اختصارات فتح DevTools أثناء الاختبار
document.addEventListener("keydown", function (e) {
  if (!quizActive) return;

  // منع F12
  if (e.key === "F12") {
    e.preventDefault();
  }
  // منع Ctrl+Shift+I (Inspect) و Ctrl+Shift+J (Console) و Ctrl+Shift+C (Select Element)
  if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
    e.preventDefault();
  }
  // منع Ctrl+U (View Source)
  if (e.ctrlKey && e.key.toUpperCase() === "U") {
    e.preventDefault();
  }
});

/* ============================================
   بدء الاختبار
   ============================================ */
startForm.onsubmit = function (event) {
  event.preventDefault();
  studentName = studentNameInput.value.trim();
  if (!studentName) {
    studentNameInput.focus();
    return;
  }

  // تجهيز أسئلة جديدة
  prepareQuestions();
  userAnswers = new Array(questions.length).fill(null);
  tabSwitchCount = 0;
  quizActive = true;

  startScreen.hidden = true;
  quizContent.hidden = false;
  startTimer();
  loadQuestion();
  saveProgress();
};

/* ============================================
   استعادة التقدم عند تحميل الصفحة
   عند فتح الصفحة، يتم التحقق من وجود بيانات
   محفوظة في localStorage لاستعادة حالة الاختبار
   في حالة عمل Refresh بالخطأ
   ============================================ */
function initApp() {
  // تفعيل الوضع الليلي إن كان محفوظاً
  initTheme();

  // محاولة استعادة التقدم المحفوظ
  if (loadProgress()) {
    // تم العثور على بيانات محفوظة - استعادة الحالة
    quizActive = true;
    startScreen.hidden = true;
    quizContent.hidden = false;
    scoreElement.innerHTML = `الدرجة: ${score}`;

    // استعادة التايمر
    startTimer();

    // تحميل السؤال الحالي
    loadQuestion();
  }
}

// تشغيل التطبيق
initApp();
