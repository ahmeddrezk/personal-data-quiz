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
