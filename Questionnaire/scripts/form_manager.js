function FirstOption() {
  let fop = document.forms["fdpessoais"]["q4"].value;
  let sop = document.forms["fdpessoais"]["q5"].value;
  let top = document.forms["fdpessoais"]["q6"].value;
  if (fop == sop) {
    document.getElementById("s" + sop).checked = false;
  }
  if (fop == top) {
    document.getElementById("t" + top).checked = false;
  }
}

function SecondOption() {
  let fop = document.forms["fdpessoais"]["q4"].value;
  let sop = document.forms["fdpessoais"]["q5"].value;
  let top = document.forms["fdpessoais"]["q6"].value;
  if (sop == fop) {
    document.getElementById("f" + fop).checked = false;
  }
  if (sop == top) {
    document.getElementById("t" + top).checked = false;
  }
}

function ThirdOption() {
  let fop = document.forms["fdpessoais"]["q4"].value;
  let sop = document.forms["fdpessoais"]["q5"].value;
  let top = document.forms["fdpessoais"]["q6"].value;
  if (top == fop) {
    document.getElementById("f" + fop).checked = false;
  }
  if (top == sop) {
    document.getElementById("s" + sop).checked = false;
  }
}

function Write_Text() {
  let x = document.forms["fdpessoais"]["otherWebsites"].value;
  let whichField = document.forms["fdpessoais"]["which"];

  if (x === "no") {
    whichField.disabled = true;
    whichField.value = "";
    whichField.style.visibility = "hidden";
  } else {
    whichField.disabled = false;
    whichField.style.visibility = "visible";
  }
}
  

const form1 = document.getElementById("questionnaire_p1");
if (form1) {
  form1.addEventListener("submit", function(e) {
    let userId = localStorage.getItem("userId");

    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("userId", userId);
    }

    const age = form1["years"].value;
    const gender = form1["gender"].value;
    const browser1 = form1["q4"].value;
    const browser2 = form1["q5"].value;
    const browser3 = form1["q6"].value;
    const otherWebsites = form1["otherWebsites"].value;
    const otherWhich = form1["which"].value;
    const isOver = false;

    const formData = {
      age,
      gender,
      browser1,
      browser2,
      browser3,
      otherWebsites,
      otherWhich,
      isOver,
    };

    localStorage.setItem(userId, JSON.stringify(formData));

    console.log("Form 1 Submitted");
  });
}


const form2 = document.getElementById("questionnaire_p2");
  if(form2){

    window.onload = function() {
      const userId = localStorage.getItem("userId");
    
      if (!userId) {
        // If userId does not exist, redirect to form1
        window.location.href = "../questionnaire_p1.html";
      }
    };

    
    form2.addEventListener("submit", function(e){
      //e.preventDefault();

      const userId = localStorage.getItem("userId");

      const task1 = form2["q9"].value;
      console.log("Tarefa 1", task1);

      const task2 = form2["q10"].value;
      console.log("Tarefa 2", task2);

      const task3 = form2["q11"].value;
      console.log("Tarefa 3", task3);

      const task4 = form2["q12"].value;
      console.log("Tarefa 3", task4);

      const task5 = form2["q13"].value;
      console.log("Tarefa 3", task5);

      console.log("User Id", userId);

      const prevFormData = JSON.parse(localStorage.getItem(userId));
      console.log("Prev Data", prevFormData);

      prevFormData.task1 = task1;
      prevFormData.task2 = task2;
      prevFormData.task3 = task3;
      prevFormData.task4 = task4;
      prevFormData.task5 = task5;

      localStorage.setItem(userId, JSON.stringify(prevFormData));
    })
  }


  
const form3 = document.getElementById("questionnaire_p3");
if(form3){

  window.onload = function() {
    const userId = localStorage.getItem("userId");
  
    if (!userId) {
      // If userId does not exist, redirect to form1
      window.location.href = "../questionnaire_p1.html";
    }
  };


  form3.addEventListener("submit", function(e){
    //e.preventDefault();
    const experience1 = form3["q14"].value;

    const experience2 = form3["q15"].value;

    const experience3 = form3["q16"].value;

    const experience4 = form3["q17"].value;

    const category = form3["q18"].value;

    const color = form3["q19"].value;

    const similarImgs_1 = form3["q20"].value;

    const similarImgs_2 = form3["q21"].value;

    const userExp = form3["q22"].value;

    const design = form3["q23"].value;


    const userId = localStorage.getItem("userId");
    localStorage.removeItem("userId");

    const prevFormData = JSON.parse(localStorage.getItem(userId));

    prevFormData.experience1 = experience1;
    prevFormData.experience2 = experience2;
    prevFormData.experience3 = experience3;
    prevFormData.experience4 = experience4;
    prevFormData.category = category;
    prevFormData.color = color;
    prevFormData.similarImgs_1 = similarImgs_1;
    prevFormData.similarImgs_2 = similarImgs_2;
    prevFormData.userExp = userExp;
    prevFormData.design = design;
    prevFormData.isOver = true;


    localStorage.setItem(userId, JSON.stringify(prevFormData));
  })
}

const thanks = document.getElementById("thanks");
if (thanks) {
  function populateLocalStorageTable() {
    const resultsDiv = document.getElementById("results");
    const localStorageTable = document.getElementById("localStorageTable").getElementsByTagName('tbody')[0];

    // Create a row for column headers
    const headerRow = localStorageTable.insertRow(0);

    if (localStorage.length > 0) {
      // Find the first item with 'isOver' set to true to get the header
      let firstItem;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const itemString = localStorage.getItem(key);
        
        try {
          const data = JSON.parse(itemString);
          if (data.isOver === true) {
            firstItem = data;
            break;
          }
        } catch (e) {
        }
      }

      if (firstItem) {
        for (const prop in firstItem) {
          if (prop !== 'isOver') { // Exclude 'isOver' column
            const headerCell = document.createElement("th");
            headerCell.innerHTML = prop;
            headerRow.appendChild(headerCell);
          }
        }
      }
    }

    // Loop through the local storage items and populate data rows
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const itemString = localStorage.getItem(key);
      
      try {
        const data = JSON.parse(itemString);

        if (data.isOver === true) { // Check if 'isOver' is true
          const row = localStorageTable.insertRow(-1); // Add data rows at the end

          // Loop through the data properties and create cells dynamically (excluding 'isOver')
          for (const prop in data) {
            if (prop !== 'isOver') { // Exclude 'isOver' column
              const cell = row.insertCell();
              cell.innerHTML = data[prop] || 'None';
            }
          }
        }
      } catch (e) {
      }
    }
    drawPieChart();
    createBarChart();
  }
  
  function drawLegend(ctx, colors, labels, canvas) {
    var legendX = canvas.width - 80; // Adjusted the legend position
    var legendY = 20; // Adjusted the legend position
    var legendHeight = 15; // Adjusted the legend height
    var fontSize = 12; // Adjusted the font size

    ctx.font = fontSize + "px Arial";

    for (var i = 0; i < labels.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(legendX, legendY + i * legendHeight, 10, 10); // Adjusted the legend square size
        ctx.fillStyle = 'black';
        ctx.fillText(labels[i], legendX + 20, legendY + 10 + i * legendHeight); // Adjusted the legend text position
    }
}

function drawPieChart() {
    var canvas = document.getElementById("pieChart");
    var ctx = canvas.getContext("2d");

    // Set a fixed canvas size
    canvas.width = 500;
    canvas.height = 250;

    // Disable anti-aliasing
    ctx.imageSmoothingEnabled = false;

    var dataValues = {};
    var total = 0;
    var propertyName = 'gender';
    
    var colors = [
        'rgb(255, 205, 86)',
        'rgba(0,0,255,0.6)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(255, 146, 86)'
    ];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var itemString = localStorage.getItem(key);

        try {
            var data = JSON.parse(itemString);

            if (data.isOver === true && data.hasOwnProperty(propertyName)) {
                var value = data[propertyName];
                if (dataValues[value]) {
                    dataValues[value]++;
                } else {
                    dataValues[value] = 1;
                }
                total++;
            }
        } catch (e) {
            // Handle JSON parsing error
        }
    }

    var startAngle = 0;

    for (var i = 0; i < colors.length; i++) {
        var value = Object.keys(dataValues)[i];
        var sliceAngle = (dataValues[value] / total) * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 4 + 50, canvas.height / 2);
        ctx.arc(canvas.width / 4 + 50, canvas.height / 2, canvas.width / 4, startAngle, startAngle + sliceAngle);
        ctx.fillStyle = colors[i];
        ctx.fill();

        startAngle += sliceAngle;
    }

    drawLegend(ctx, colors, Object.keys(dataValues), canvas);
}


function createBarChart() {
  const canvas = document.getElementById("designChart");
  const ctx = canvas.getContext("2d");

  const propertyName = 'design';

  const dataValues = [];
  const dataLabels = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const itemString = localStorage.getItem(key);

    try {
      const data = JSON.parse(itemString);

      if (data.isOver === true && data.hasOwnProperty(propertyName)) {
        const value = data[propertyName];
        if (dataValues[value]) {
          dataValues[value]++;
        } else {
          dataValues[value] = 1;
          dataLabels.push(value);
        }
      }
    } catch (e) {
    }
  }

  dataLabels.sort((a, b) => b - a);

  const barWidth = 40;
  const fontSize = 9;
  const gridSpacing = 25;
  const yOffset = 20; 

  dataLabels.forEach((label, index) => {
    const barHeight = dataValues[label] * 20;
    const x = index * (barWidth + gridSpacing);
    const y = canvas.height - barHeight - yOffset;

    ctx.fillStyle = 'rgb(255, 205, 86)';
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = 'black';
    ctx.font = `${fontSize}px Arial`;
    const valueText = dataValues[label];
    const valueTextWidth = ctx.measureText(valueText).width;
    ctx.fillText(valueText, x + (barWidth - valueTextWidth) / 2, y - 5);

    ctx.fillStyle = 'black';
    ctx.fillText(label, x + barWidth / 2 - ctx.measureText(label).width / 2, canvas.height + 10 - yOffset);
  });
}

  
  function initializePage() {
    populateLocalStorageTable();
  }
  
  window.onload = initializePage;
}
