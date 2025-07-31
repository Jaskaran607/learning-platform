
// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    // Show selected page
    document.getElementById(pageId + '-page').classList.remove('hidden');

    // Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-advance carousel
setInterval(nextSlide, 5000);

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Google Maps Function
function openGoogleMaps() {
    const address = "Village Pakhowal, Ludhiana, Punjab, India 141001";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
}

// Test System Variables
let currentUser = null;
let currentTest = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let testTimer = null;
let timeRemaining = 1800; // 30 minutes in seconds

// Test Questions Database
const testQuestions = {
    computer: [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
            correct: 0
        },
        {
            question: "Which of the following is an input device?",
            options: ["Monitor", "Printer", "Keyboard", "Speaker"],
            correct: 2
        },
        {
            question: "What is the brain of the computer?",
            options: ["Hard Drive", "RAM", "CPU", "Motherboard"],
            correct: 2
        },
        {
            question: "Which key is used to delete characters to the left of cursor?",
            options: ["Delete", "Backspace", "Ctrl", "Alt"],
            correct: 1
        },
        {
            question: "What does RAM stand for?",
            options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
            correct: 0
        },
        {
            question: "Which of the following is system software?",
            options: ["MS Word", "Operating System", "Calculator", "Web Browser"],
            correct: 1
        },
        {
            question: "What is the full form of USB?",
            options: ["Universal Serial Bus", "Universal System Bus", "Uniform Serial Bus", "Uniform System Bus"],
            correct: 0
        },
        {
            question: "Which device is used to connect to the internet?",
            options: ["Printer", "Scanner", "Modem", "Speaker"],
            correct: 2
        },
        {
            question: "What is the smallest unit of data in computer?",
            options: ["Bit", "Byte", "Nibble", "Word"],
            correct: 0
        },
        {
            question: "Which of the following is volatile memory?",
            options: ["Hard Disk", "ROM", "RAM", "CD-ROM"],
            correct: 2
        },
        {
            question: "What does GUI stand for?",
            options: ["Graphical User Interface", "General User Interface", "Graphical Uniform Interface", "General Uniform Interface"],
            correct: 0
        },
        {
            question: "Which company developed Windows operating system?",
            options: ["Apple", "Google", "Microsoft", "IBM"],
            correct: 2
        },
        {
            question: "What is the extension of executable files in Windows?",
            options: [".txt", ".exe", ".doc", ".pdf"],
            correct: 1
        },
        {
            question: "Which protocol is used for sending emails?",
            options: ["HTTP", "FTP", "SMTP", "TCP"],
            correct: 2
        },
        {
            question: "What does WWW stand for?",
            options: ["World Wide Web", "World Wide Window", "World Web Window", "Wide World Web"],
            correct: 0
        },
        {
            question: "Which of the following is an antivirus software?",
            options: ["MS Word", "Norton", "Photoshop", "Excel"],
            correct: 1
        },
        {
            question: "What is the main circuit board of computer called?",
            options: ["CPU", "Motherboard", "RAM", "Hard Drive"],
            correct: 1
        },
        {
            question: "Which key combination is used to copy text?",
            options: ["Ctrl+V", "Ctrl+C", "Ctrl+X", "Ctrl+Z"],
            correct: 1
        },
        {
            question: "What does PDF stand for?",
            options: ["Portable Document Format", "Personal Document Format", "Portable Data Format", "Personal Data Format"],
            correct: 0
        },
        {
            question: "Which of the following is a web browser?",
            options: ["MS Word", "Chrome", "Excel", "PowerPoint"],
            correct: 1
        },
        {
            question: "What is the default port number for HTTP?",
            options: ["21", "25", "80", "443"],
            correct: 2
        },
        {
            question: "Which device is used to scan documents?",
            options: ["Printer", "Scanner", "Monitor", "Keyboard"],
            correct: 1
        },
        {
            question: "What does LAN stand for?",
            options: ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
            correct: 0
        },
        {
            question: "Which of the following is an output device?",
            options: ["Mouse", "Keyboard", "Monitor", "Microphone"],
            correct: 2
        },
        {
            question: "What is the function of firewall?",
            options: ["Speed up internet", "Block viruses", "Network security", "Data storage"],
            correct: 2
        },
        {
            question: "Which file format is used for images?",
            options: [".txt", ".doc", ".jpg", ".exe"],
            correct: 2
        },
        {
            question: "What does IP stand for in IP address?",
            options: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"],
            correct: 0
        },
        {
            question: "Which of the following is cloud storage service?",
            options: ["MS Word", "Google Drive", "Calculator", "Paint"],
            correct: 1
        },
        {
            question: "What is the maximum length of filename in Windows?",
            options: ["8 characters", "255 characters", "128 characters", "512 characters"],
            correct: 1
        },
        {
            question: "Which technology is used in CD-ROM?",
            options: ["Magnetic", "Optical", "Electronic", "Mechanical"],
            correct: 1
        }
    ],
    aws: [
        {
            question: "What does AWS stand for?",
            options: ["Amazon Web Services", "Amazon Web Systems", "Amazon World Services", "Amazon Wide Services"],
            correct: 0
        },
        {
            question: "Which AWS service is used for computing?",
            options: ["S3", "EC2", "RDS", "Route 53"],
            correct: 1
        },
        {
            question: "What is Amazon S3 used for?",
            options: ["Computing", "Storage", "Database", "Networking"],
            correct: 1
        },
        {
            question: "Which AWS service provides DNS?",
            options: ["EC2", "S3", "Route 53", "RDS"],
            correct: 2
        },
        {
            question: "What does EC2 stand for?",
            options: ["Elastic Compute Cloud", "Elastic Container Cloud", "Elastic Computing Cloud", "Elastic Control Cloud"],
            correct: 0
        },
        {
            question: "Which service is used for database in AWS?",
            options: ["S3", "EC2", "RDS", "Lambda"],
            correct: 2
        },
        {
            question: "What is AWS Lambda?",
            options: ["Storage service", "Serverless computing", "Database service", "Networking service"],
            correct: 1
        },
        {
            question: "Which AWS service provides CDN?",
            options: ["CloudFront", "S3", "EC2", "RDS"],
            correct: 0
        },
        {
            question: "What is the default region for AWS?",
            options: ["us-east-1", "us-west-1", "eu-west-1", "ap-south-1"],
            correct: 0
        },
        {
            question: "Which service is used for monitoring in AWS?",
            options: ["CloudWatch", "CloudTrail", "Config", "Inspector"],
            correct: 0
        },
        {
            question: "What is Amazon VPC?",
            options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Private Computing", "Virtual Public Computing"],
            correct: 0
        },
        {
            question: "Which AWS service provides load balancing?",
            options: ["ELB", "EC2", "S3", "RDS"],
            correct: 0
        },
        {
            question: "What is the maximum size of S3 object?",
            options: ["5 GB", "5 TB", "1 TB", "10 TB"],
            correct: 1
        },
        {
            question: "Which service is used for container orchestration?",
            options: ["ECS", "EC2", "S3", "RDS"],
            correct: 0
        },
        {
            question: "What does IAM stand for?",
            options: ["Identity and Access Management", "Internet Access Management", "Internal Access Management", "Identity Access Module"],
            correct: 0
        },
        {
            question: "Which AWS service provides message queuing?",
            options: ["SQS", "SNS", "SES", "SWF"],
            correct: 0
        },
        {
            question: "What is Amazon CloudFormation?",
            options: ["Monitoring service", "Infrastructure as Code", "Storage service", "Computing service"],
            correct: 1
        },
        {
            question: "Which service provides email functionality?",
            options: ["SES", "SNS", "SQS", "SWF"],
            correct: 0
        },
        {
            question: "What is the pricing model of AWS Lambda?",
            options: ["Pay per hour", "Pay per request", "Monthly subscription", "Annual subscription"],
            correct: 1
        },
        {
            question: "Which service is used for data warehousing?",
            options: ["Redshift", "RDS", "DynamoDB", "ElastiCache"],
            correct: 0
        },
        {
            question: "What is Amazon Glacier?",
            options: ["Computing service", "Archive storage", "Database service", "Networking service"],
            correct: 1
        },
        {
            question: "Which service provides NoSQL database?",
            options: ["RDS", "DynamoDB", "Redshift", "ElastiCache"],
            correct: 1
        },
        {
            question: "What is AWS Auto Scaling?",
            options: ["Manual scaling", "Automatic resource scaling", "Storage scaling", "Network scaling"],
            correct: 1
        },
        {
            question: "Which service is used for API management?",
            options: ["API Gateway", "Lambda", "EC2", "S3"],
            correct: 0
        },
        {
            question: "What is Amazon EBS?",
            options: ["Elastic Block Store", "Elastic Bean Stalk", "Elastic Block Service", "Elastic Bean Service"],
            correct: 0
        },
        {
            question: "Which service provides in-memory caching?",
            options: ["ElastiCache", "RDS", "DynamoDB", "Redshift"],
            correct: 0
        },
        {
            question: "What is AWS CloudTrail?",
            options: ["Monitoring service", "Audit logging", "Storage service", "Computing service"],
            correct: 1
        },
        {
            question: "Which service is used for machine learning?",
            options: ["SageMaker", "Lambda", "EC2", "S3"],
            correct: 0
        },
        {
            question: "What is the AWS free tier limit for EC2?",
            options: ["750 hours/month", "500 hours/month", "1000 hours/month", "250 hours/month"],
            correct: 0
        },
        {
            question: "Which service provides serverless database?",
            options: ["RDS", "DynamoDB", "Aurora Serverless", "Both B and C"],
            correct: 3
        }
    ],
    linux: [
        {
            question: "What does Linux stand for?",
            options: ["Linux Is Not Unix", "Linux Internet Network Unix", "Linux Internal Network Unix", "Linux Is New Unix"],
            correct: 0
        },
        {
            question: "Who created Linux?",
            options: ["Bill Gates", "Steve Jobs", "Linus Torvalds", "Richard Stallman"],
            correct: 2
        },
        {
            question: "Which command is used to list files?",
            options: ["ls", "list", "dir", "show"],
            correct: 0
        },
        {
            question: "What is the root directory in Linux?",
            options: ["/root", "/", "/home", "/usr"],
            correct: 1
        },
        {
            question: "Which command is used to change directory?",
            options: ["cd", "chdir", "change", "dir"],
            correct: 0
        },
        {
            question: "What does 'pwd' command do?",
            options: ["Print working directory", "Password", "Power down", "Print word"],
            correct: 0
        },
        {
            question: "Which command is used to create a directory?",
            options: ["mkdir", "makedir", "createdir", "newdir"],
            correct: 0
        },
        {
            question: "What is the default shell in most Linux distributions?",
            options: ["csh", "bash", "zsh", "fish"],
            correct: 1
        },
        {
            question: "Which command is used to remove files?",
            options: ["rm", "del", "delete", "remove"],
            correct: 0
        },
        {
            question: "What does 'chmod' command do?",
            options: ["Change mode/permissions", "Change owner", "Change directory", "Change file"],
            correct: 0
        },
        {
            question: "Which file contains user account information?",
            options: ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/hosts"],
            correct: 0
        },
        {
            question: "What is the superuser account called?",
            options: ["admin", "root", "super", "user"],
            correct: 1
        },
        {
            question: "Which command shows running processes?",
            options: ["ps", "proc", "process", "show"],
            correct: 0
        },
        {
            question: "What does 'grep' command do?",
            options: ["Search text patterns", "Group files", "Get files", "Generate report"],
            correct: 0
        },
        {
            question: "Which command is used to copy files?",
            options: ["cp", "copy", "cpy", "duplicate"],
            correct: 0
        },
        {
            question: "What is the Linux kernel?",
            options: ["User interface", "Core of operating system", "File manager", "Text editor"],
            correct: 1
        },
        {
            question: "Which command shows disk usage?",
            options: ["du", "df", "disk", "usage"],
            correct: 0
        },
        {
            question: "What does 'sudo' stand for?",
            options: ["Super User Do", "Switch User Do", "System User Do", "Secure User Do"],
            correct: 0
        },
        {
            question: "Which file system is commonly used in Linux?",
            options: ["NTFS", "FAT32", "ext4", "HFS+"],
            correct: 2
        },
        {
            question: "What is a daemon in Linux?",
            options: ["Error message", "Background process", "File type", "Command"],
            correct: 1
        },
        {
            question: "Which command is used to find files?",
            options: ["find", "search", "locate", "both A and C"],
            correct: 3
        },
        {
            question: "What does 'tar' command do?",
            options: ["Archive files", "Transfer files", "Transform files", "Translate files"],
            correct: 0
        },
        {
            question: "Which directory contains system binaries?",
            options: ["/bin", "/usr", "/home", "/var"],
            correct: 0
        },
        {
            question: "What is a symbolic link?",
            options: ["Hard link", "Shortcut to file", "File copy", "File backup"],
            correct: 1
        },
        {
            question: "Which command shows system information?",
            options: ["uname", "info", "system", "about"],
            correct: 0
        },
        {
            question: "What does 'cron' do?",
            options: ["Schedule tasks", "Create files", "Copy files", "Compress files"],
            correct: 0
        },
        {
            question: "Which command is used to mount filesystems?",
            options: ["mount", "attach", "connect", "link"],
            correct: 0
        },
        {
            question: "What is the purpose of /etc directory?",
            options: ["User files", "System configuration", "Temporary files", "Log files"],
            correct: 1
        },
        {
            question: "Which command shows network connections?",
            options: ["netstat", "network", "connect", "net"],
            correct: 0
        },
        {
            question: "What does 'vi' or 'vim' refer to?",
            options: ["File manager", "Text editor", "Web browser", "Media player"],
            correct: 1
        }
    ]
};

// Authentication Functions
function showSignup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    const userid = document.getElementById('login-userid').value;
    const password = document.getElementById('login-password').value;

    // Simple validation (in real app, this would be server-side)
    if (userid && password) {
        currentUser = { userid: userid, name: userid };
        document.getElementById('user-name').textContent = userid;
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('test-dashboard').classList.remove('hidden');
    } else {
        alert('Please enter valid credentials');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const userid = document.getElementById('signup-userid').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && userid && password) {
        alert('Account created successfully! Please login.');
        showLogin();
    } else {
        alert('Please fill all fields');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('test-dashboard').classList.add('hidden');
    document.getElementById('test-interface').classList.add('hidden');
    document.getElementById('test-results').classList.add('hidden');
    document.getElementById('auth-section').classList.remove('hidden');
    showLogin();
}

// Test Functions
function startTest(testType) {
    currentTest = testType;
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 1800; // 30 minutes

    const questions = testQuestions[testType];
    for (let i = 0; i < questions.length; i++) {
        userAnswers[i] = null;
    }

    document.getElementById('test-dashboard').classList.add('hidden');
    document.getElementById('test-interface').classList.remove('hidden');

    const titles = {
        computer: 'Basic Computer Test',
        aws: 'AWS Cloud Test',
        linux: 'Linux Administration Test'
    };

    document.getElementById('test-title').textContent = titles[testType];
    document.getElementById('total-questions').textContent = questions.length;

    startTimer();
    displayQuestion();
}

function displayQuestion() {
    const questions = testQuestions[currentTest];
    const question = questions[currentQuestionIndex];

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'flex items-center';
        optionDiv.innerHTML = `
                    <input type="radio" id="option-${index}" name="answer" value="${index}" 
                           ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}
                           class="mr-3 text-green-600 focus:ring-green-500">
                    <label for="option-${index}" class="text-gray-700 cursor-pointer">${option}</label>
                `;
        optionsContainer.appendChild(optionDiv);
    });

    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('submit-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
}

function previousQuestion() {
    saveCurrentAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    saveCurrentAnswer();
    const questions = testQuestions[currentTest];
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function saveCurrentAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
}

function submitTest() {
    saveCurrentAnswer();
    clearInterval(testTimer);

    const questions = testQuestions[currentTest];
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct) {
            correctCount++;
        }
    }

    const percentage = Math.round((correctCount / questions.length) * 100);
    const incorrectCount = questions.length - correctCount;

    document.getElementById('test-interface').classList.add('hidden');
    document.getElementById('test-results').classList.remove('hidden');

    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('incorrect-answers').textContent = incorrectCount;

    let message = '';
    if (percentage >= 80) {
        message = 'Excellent! Outstanding performance!';
    } else if (percentage >= 60) {
        message = 'Good job! You passed the test.';
    } else {
        message = 'Keep practicing. You can do better!';
    }

    document.getElementById('result-message').textContent = message;
    document.getElementById('progress-bar').style.width = percentage + '%';
}

function startTimer() {
    testTimer = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            submitTest();
        }
    }, 1000);
}

function backToDashboard() {
    document.getElementById('test-results').classList.add('hidden');
    document.getElementById('test-dashboard').classList.remove('hidden');
}

function retakeTest() {
    startTest(currentTest);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('shadow-xl');
    }
});
  
