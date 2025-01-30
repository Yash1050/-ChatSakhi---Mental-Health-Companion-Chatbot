var score = 0
var questionSet0 = $('.fillerQuestion');
var questionSet1 = $('.firstQuestion');
var questionSet2 = $('.secondQuestion');
var resultsBtn = $('.Results');
var resultsShow = $('.Results-show');

var choice1 = $("#btn1");
var choice2 = $("#btn2");
var choice3 = $("#btn3");
var choice4 = $("#btn4");
var choice5 = $("#btn5");

var choice6 = $("#btn6");
var choice7 = $("#btn7");
var choice8 = $("#btn8");
var choice9 = $('#btn9');
var choice10 = $('#btn10');

var choice11 = $('#btn11');
var choice12 = $('#btn12');
var choice13 = $('#btn13');

var choice_checker = 0;

const optionsAnxiety = document.querySelectorAll('.options');


/////////my doing//////////////////


const questions2 = [
  {
    question: "1. I have found moments where I could share a good laugh or see the lighter side of things:",
    score: 10,
  },
  {
    question: "2. I have eagerly anticipated and looked forward to future events or experiences:",
    score: 10,
  },
  {
    question: "3. Have I ever been too hard on myself, blaming myself when things didn't go as planned, even if it wasn't my fault?",
    score: 10,
  },
  {
    question: "4. I have experienced times of unnecessary anxiety or excessive worry, without a clear reason:",
    score: 10,
  },
  {
    question: "5. I have felt moments of sudden fear or panic when there wasn't an apparent cause for it:",
    score: 10,
  },
  {
    question: "6.	I have everyday challenges that are affecting me more than usual, making me feel overwhelmed:",
    score: 10,
  },
  {
    question: "7. Do I Have trouble falling asleep or staying asleep due to feeling very unhappy or distressed?",
    score: 10,
  },
  {
    question: "8. Have I experienced a sense of sadness or misery during the past week?",
    score: 10,
  },
  {
    question: "9. I have been so unhappy that I found yourself shedding tears:",
    score: 10,
  },
  {
    question: "10. Have thoughts of harming myself crossed my mind?",
    score: 10,
  },
]

let i = 0;
const nextButton = document.querySelector('#nextQuestion');
const previousButton = document.querySelector('#previousQuestion');
let question = document.querySelector('.question');
const test = document.querySelector(".test");
var container1 = $(".wid-main");
let checkResult = document.querySelector('#checkResult');
let progressBar = document.querySelector('.progress-bar-fill');
const selector=document.querySelector('.wid-main');
var set;
var flag;
if(selector.classList.contains('depression')){
   set=questions2;
   flag=1;
}
else{
   set=questions2;
   flag=0;
}

questionGenerator(i);


nextButton.addEventListener('click', () => {

  optionsAnxiety.forEach(function (el) {

    if (el.classList.contains("active")) {
      el.classList.remove("active");
      if (i < set.length - 1) {
        i++;
        questionGenerator(i);
      }
    }

  });


})

function questionGenerator(i) {
  progressBar.style.width = (i + 1) * (100 / set.length) + '%';
  question.innerText = set[i].question;
  console.log(set[i].question);
  if (i == set.length - 1) {
    checkResult.classList.remove('hidden');
    nextButton.classList.add('hidden');
  }
}

optionsAnxiety.forEach(function (el, key) {
  el.addEventListener('click', function (e) {
    let value = e.target.textContent;

    if (value == "Yes, most of the time") {
      set[i].score = 10;
    } else if (value == "Only occasionally") {
      set[i].score = 5;
    } else if (value == "No, never") {
      set[i].score = 2.5;
    } else if (value == "Yes, quite often") {
      set[i].score = 7.5;
    } else {
      set[i].score = 0;
    }
    el.classList.toggle("active");
    optionsAnxiety.forEach(function (ell, els) {
      if (key !== els) {
        ell.classList.remove('active');
      }
    });
  });
});

checkResult.addEventListener('click', () => {
  let score = 0;
  for (let i = 0; i < set.length; i++) {
    score += set[i].score;
  }
  checkResult.classList.add('hidden');
  console.log(score);
  test.style.display = "none";
  if(!flag){
  if (score >= -1 && score <= 5) {
    container1.append(`
        <h1>No Anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. However, this little degree of anxiety may actually be a sign of anxiety in your life. Individuals who score in this low range sometimes indicate that they may be detached from themselves, others, or their environment. Typically this is not healthy for most and should be avoided. You can help yourself by making a more concerted effort to become reattached to significant others and your environment. </p>
        `)
  } else if (score >= 6 && score <= 22) {
    container1.append(`
        <h1>Mid to little anxiety</h1>
        <h2>Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis. </p>
        `)
  }
  else if (score >= 23 && score <= 37) {
    container1.append(`
        <h1>Moderate Anxiety</h1>
        <h2>Your Score is ${score}</h2>
        <h3>Results of Your Anxiety Screening Quiz </h3>
        <p>Based upon your responses to this anxiety screening measure, it appears that you may be suffering from moderate anxiety, symptoms that might typically qualify you for the diagnosis of an anxiety disorder.<br><br>
        Sometimes people who feel such anxiety symptoms don't realize that their body may be trying to tell them something. Look for patterns in your behavior, such as when and what circumstances under which you experience the symptoms you've described. For example, if it occurs prior to public speaking and your job requires a lot of presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. </p>    
        `)
  }
    else if (score >= 38) {
      container1.append(`
          <h1>Severe Anxiety</h1>
          <h2>Score is ${score}</h2>
          <h3>Results of Your Anxiety Screening Quiz </h3>
          <p>Based upon your responses to this screening measure , Your responses are similar to others who experience severe anxiety symptoms.<br>We recommend consider reaching out to a qualified professional about your symptoms. </p>
          `)
    }

  }
  else{
    if(score>=0&&score<=25){
      container1.append(`
      <h1>No Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your PPD Screening Quiz </h3>
      <p>You've answered this depression test in a manner that suggests that while you may occasionally be experiencing some depressive symptoms from time to time, you're not likely to be suffering a major depressive episode at present. Most people experience depressive feelings from time to time in their lives -- this is normal and expected.
      <br><br>
      If, however, you are experiencing depressive symptoms strongly enough that they are interferring with your daily life functioning, you are strongly advised to consult a trained mental health professional for further consultation. Only a mental health professional will be able to make a real and valid diagnosis. </p>
      
      
      
      
      
      `)  
    }
    else if(score>=25&&score<=50){
      container1.append(`
      <h1>Possible mild Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your PPD Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have just a few of the symptoms associated with clinical depression. For most people, this kind of response is likely an indication of the normal ups and downs associated with life. It is unlikely for a person in this response range to qualify for a diagnosis of clinical depression.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      
      `)
    }  
    else if(score>=51&&score<=60){
      container1.append(`
      <h1>Borderline Depression</h1>
      <h2>Your Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=60&&score<=70){
      container1.append(`
      <h1>Mild to moderate Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=70&&score<=80){
      container1.append(`
      <h1>Moderate to severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>
  
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
    else if(score>=85){
      container1.append(`
      <h1>Severe Depression</h1>
      <h2>Score is ${score}</h2>
      <h3>Results of Your Depression Screening Quiz </h3>
      <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
      <br><br>
      You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
      
      
      
      
      `)
    }
  
  }

})


/////end of my work/////////////

// function fetchScore() {
//   var scoreAnxiety = 0;
//   const answers = document.querySelectorAll('.active');
//   answers.forEach(add);
//   function add(value) {
//     if (value.innerText == 'Sometimes') {
//       scoreAnxiety += 2;
//     }
//     else if (value.innerText == 'Usually') {
//       scoreAnxiety += 4;
//     }
//     else if (value.innerText == 'Just a little') {
//       scoreAnxiety += 1;
//     }
//     else if (value.innerText == 'Often') {
//       scoreAnxiety += 3;
//     }
//   }

//   const test = document.querySelector(".test");
//   test.style.display = "none";
//   var container1 = $(".wid-main");
//   if (scoreAnxiety >= 0 && scoreAnxiety <= 5) {
//     container1.append(`
//     <h1>No Anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. However, this little degree of anxiety may actually be a sign of anxiety in your life. Individuals who score in this low range sometimes indicate that they may be detached from themselves, others, or their environment. Typically this is not healthy for most and should be avoided. You can help yourself by making a more concerted effort to become reattached to significant others and your environment. </p>
//     `)
//   }
//   else if (scoreAnxiety >= 6 && scoreAnxiety <= 22) {
//     container1.append(`
//     <h1>Mid to little anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>You have answered this anxiety screening in such a way as to suggest that you are not likely currently suffering from an anxiety disorder. Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis. </p>
//     `)
//   }
//   else if (scoreAnxiety >= 23 && scoreAnxiety <= 37) {
//     container1.append(`
//     <h1>Moderate Anxiety</h1>
//     <h2>Your Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>Based upon your responses to this anxiety screening measure, it appears that you may be suffering from moderate anxiety, symptoms that might typically qualify you for the diagnosis of an anxiety disorder.<br><br>
//     Sometimes people who feel such anxiety symptoms don't realize that their body may be trying to tell them something. Look for patterns in your behavior, such as when and what circumstances under which you experience the symptoms you've described. For example, if it occurs prior to public speaking and your job requires a lot of presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. </p>    
//     `)
//   }
//   else if (scoreAnxiety >= 38) {
//     container1.append(`
//     <h1>Severe Anxiety</h1>
//     <h2>Score is ${scoreAnxiety}</h2>
//     <h3>Results of Your Anxiety Screening Quiz </h3>
//     <p>Based upon your responses to this screening measure , Your responses are similar to others who experience severe anxiety symptoms.<br>We recommend consider reaching out to a qualified professional about your symptoms. </p>
//     `)
//   }


// }
function fetchScoreDepression(){
  var scoreDepression=0;
  const answers=document.querySelectorAll('.active');
  answers.forEach(add);
  function add (value){
    if(value.innerText=='Yes, most of the time'){
      scoreDepression+=2;
    }
    else if(value.innerText=='Yes, quite often'){
      scoreDepression+=4;
    }
    else if(value.innerText=='Only occasionally'){
      scoreDepression+=1;
    }
    else if(value.innerText=='No, never'){
      scoreDepression+=3;
    }
    
    
  }

  const test =document.querySelector(".depression-test");
  test.style.display="none";
  var container1=$(".wid-main");
  if(scoreDepression>=0&&scoreDepression<=9){
    container1.append(`
    <h1>No Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>You've answered this depression test in a manner that suggests that while you may occasionally be experiencing some depressive symptoms from time to time, you're not likely to be suffering a major depressive episode at present. Most people experience depressive feelings from time to time in their lives -- this is normal and expected.
    <br><br>
    If, however, you are experiencing depressive symptoms strongly enough that they are interferring with your daily life functioning, you are strongly advised to consult a trained mental health professional for further consultation. Only a mental health professional will be able to make a real and valid diagnosis. </p>
    
    
    
    
    
    `)  
  }
  else if(scoreDepression>=10&&scoreDepression<=17){
    container1.append(`
    <h1>Possible mild Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have just a few of the symptoms associated with clinical depression. For most people, this kind of response is likely an indication of the normal ups and downs associated with life. It is unlikely for a person in this response range to qualify for a diagnosis of clinical depression.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    
    `)
  }  
  else if(scoreDepression>=18&&scoreDepression<=21){
    container1.append(`
    <h1>Borderline Depression</h1>
    <h2>Your Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=22&&scoreDepression<=35){
    container1.append(`
    <h1>Mild to moderate Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>

    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=36&&scoreDepression<=53){
    container1.append(`
    <h1>Moderate to severe Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.<br><br>

    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  else if(scoreDepression>=54){
    container1.append(`
    <h1>Severe Depression</h1>
    <h2>Score is ${scoreDepression}</h2>
    <h3>Results of Your Depression Screening Quiz </h3>
    <p>Based upon your responses to this depression test, you have some of the symptoms associated with clinical depression. People who score in this range occasionally complain of feeling unmotivated, lacking energy, and having sleep problems. They feel lonely once in awhile but rarely feel hopeless or completely alone.
    <br><br>
    You should not take this as a diagnosis of any sort, or a recommendation for treatment. However, some people may benefit from a consultation with a trained mental health professional if they are experiencing any difficulties in daily functioning. </p>
    
    
    
    
    `)
  }
  
  
}

function filler1() {

  if (choice_checker == 0) {
    questionSet1.css('visibility', 'visible');
    choice11.addClass('selected');
    choice_checker = 1;
  }

}
function filler2() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice12.addClass('selected');
    choice_checker = 1;
  }
}
function filler3() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice13.addClass('selected');
    choice_checker = 1;
  }
}

function happy() {

  if (choice_checker == 1) {
    score = 1

    choice1.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }
}

function sad() {
  if (choice_checker == 1) {
    score = 2

    choice2.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }
}

function angry() {

  if (choice_checker == 1) {
    score = 3
    choice3.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function nervous() {

  if (choice_checker == 1) {
    score = 4
    choice4.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function sleepy() {

  if (choice_checker == 1) {

    score = 5
    choice5.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }

}

function rock() {

  if (choice_checker == 2) {

    score = score * 7;
    choice6.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function rap() {

  if (choice_checker == 2) {

    score = score * 11;
    choice7.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function pop() {
  if (choice_checker == 2) {

    score = score * 13;
    choice8.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function alt() {

  if (choice_checker == 2) {

    score = score * 17;
    choice9.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function country() {

  if (choice_checker == 2) {

    score = score * 19;
    choice10.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
