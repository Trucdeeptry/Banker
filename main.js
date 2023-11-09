function createMatrices() {
        // Lấy các giá trị Allocation và Max từ các phần tử <select>
        var allocationMatrix = [];
        var maxMatrix = [];

        for (var i = 0; i < 5; i++) { // Số lượng tiến trình P0-P4
            var allocationRow = [];
            var maxRow = [];

            // Lấy giá trị Allocation cho mỗi tài nguyên A, B, C
            allocationRow.push(parseInt(document.getElementById("P" + i + "_A-all").value));
            allocationRow.push(parseInt(document.getElementById("P" + i + "_B-all").value));
            allocationRow.push(parseInt(document.getElementById("P" + i + "_C-all").value));

            // Lấy giá trị Max cho mỗi tài nguyên A, B, C
            maxRow.push(parseInt(document.getElementById("P" + i + "_A-max").value));
            maxRow.push(parseInt(document.getElementById("P" + i + "_B-max").value));
            maxRow.push(parseInt(document.getElementById("P" + i + "_C-max").value));

            allocationMatrix.push(allocationRow);
            maxMatrix.push(maxRow);
        }

        

       
    }

    function calculateNeed() {
        // Lấy giá trị Allocation và Max của từng tiến trình
        const allocation = [
            [
                parseInt(document.getElementById("P0_A-all").value),
                parseInt(document.getElementById("P0_B-all").value),
                parseInt(document.getElementById("P0_C-all").value)
            ],
            [
                parseInt(document.getElementById("P1_A-all").value),
                parseInt(document.getElementById("P1_B-all").value),
                parseInt(document.getElementById("P1_C-all").value)
            ],
            [
                parseInt(document.getElementById("P2_A-all").value),
                parseInt(document.getElementById("P2_B-all").value),
                parseInt(document.getElementById("P2_C-all").value)
            ],
            [
                parseInt(document.getElementById("P3_A-all").value),
                parseInt(document.getElementById("P3_B-all").value),
                parseInt(document.getElementById("P3_C-all").value)
            ],
            [
                parseInt(document.getElementById("P4_A-all").value),
                parseInt(document.getElementById("P4_B-all").value),
                parseInt(document.getElementById("P4_C-all").value)
            ]
        ];
    
        const max = [
            [
                parseInt(document.getElementById("P0_A-max").value),
                parseInt(document.getElementById("P0_B-max").value),
                parseInt(document.getElementById("P0_C-max").value)
            ],
            [
                parseInt(document.getElementById("P1_A-max").value),
                parseInt(document.getElementById("P1_B-max").value),
                parseInt(document.getElementById("P1_C-max").value)
            ],
            [
                parseInt(document.getElementById("P2_A-max").value),
                parseInt(document.getElementById("P2_B-max").value),
                parseInt(document.getElementById("P2_C-max").value)
            ],
            [
                parseInt(document.getElementById("P3_A-max").value),
                parseInt(document.getElementById("P3_B-max").value),
                parseInt(document.getElementById("P3_C-max").value)
            ],
            [
                parseInt(document.getElementById("P4_A-max").value),
                parseInt(document.getElementById("P4_B-max").value),
                parseInt(document.getElementById("P4_C-max").value)
            ]
        ];
    
        // Tính toán ma trận Need
        const need = [];
        for (let i = 0; i < 5; i++) {
            need[i] = [];
            for (let j = 0; j < 3; j++) {
                need[i][j] = max[i][j] - allocation[i][j];
            }
        }
    
        // Cập nhật giá trị của ma trận Need vào cột "Need" của từng tiến trình
        document.getElementById("P0_A-need").textContent = need[0][0];
        document.getElementById("P0_B-need").textContent = need[0][1];
        document.getElementById("P0_C-need").textContent = need[0][2];
    
        document.getElementById("P1_A-need").textContent = need[1][0];
        document.getElementById("P1_B-need").textContent = need[1][1];
        document.getElementById("P1_C-need").textContent = need[1][2];
    
        document.getElementById("P2_A-need").textContent = need[2][0];
        document.getElementById("P2_B-need").textContent = need[2][1];
        document.getElementById("P2_C-need").textContent = need[2][2];
    
        document.getElementById("P3_A-need").textContent = need[3][0];
        document.getElementById("P3_B-need").textContent = need[3][1];
        document.getElementById("P3_C-need").textContent = need[3][2];
    
        document.getElementById("P4_A-need").textContent = need[4][0];
        document.getElementById("P4_B-need").textContent = need[4][1];
        document.getElementById("P4_C-need").textContent = need[4][2];
    }

    function calculateAvailable() {
        // Lấy giá trị ban đầu của Available (A-src)
        const aSrc = [
            parseInt(document.getElementById("A-src").value),
            parseInt(document.getElementById("B-src").value),
            parseInt(document.getElementById("C-src").value)
        ];
    
        // Lấy giá trị Allocation của từng tiến trình
        const allocation = [
            [
                parseInt(document.getElementById("P0_A-all").value),
                parseInt(document.getElementById("P0_B-all").value),
                parseInt(document.getElementById("P0_C-all").value)
            ],
            [
                parseInt(document.getElementById("P1_A-all").value),
                parseInt(document.getElementById("P1_B-all").value),
                parseInt(document.getElementById("P1_C-all").value)
            ],
            [
                parseInt(document.getElementById("P2_A-all").value),
                parseInt(document.getElementById("P2_B-all").value),
                parseInt(document.getElementById("P2_C-all").value)
            ],
            [
                parseInt(document.getElementById("P3_A-all").value),
                parseInt(document.getElementById("P3_B-all").value),
                parseInt(document.getElementById("P3_C-all").value)
            ],
            [
                parseInt(document.getElementById("P4_A-all").value),
                parseInt(document.getElementById("P4_B-all").value),
                parseInt(document.getElementById("P4_C-all").value)
            ]
        ];
    
        // Tính toán ma trận Available
        const available = [];
        for (let i = 0; i < 3; i++) {
            available[i] = aSrc[i];
        }
    
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 3; j++) {
                available[j] -= allocation[i][j];
            }
        }
    
          // Gán giá trị tính toán vào các phần tử có id tương ứng
          document.getElementById("A-avail").textContent = available[0];
          document.getElementById("B-avail").textContent = available[1];
          document.getElementById("C-avail").textContent = available[2];

       
    }

    function createMatrixWork() {
        // Lấy giá trị Available của từng tiến trình
        const available = [
            parseInt(document.getElementById("A-avail").textContent),
            parseInt(document.getElementById("B-avail").textContent),
            parseInt(document.getElementById("C-avail").textContent)
        ];
        
        document.getElementById("A-work").textContent = available[0];
        document.getElementById("B-work").textContent = available[1];
        document.getElementById("C-work").textContent = available[2];

    }
    
   
    
      function isSafe() {
        // Lấy thông tin tài nguyên Work từ HTML
        let workA = parseInt(document.getElementById("A-work").textContent);
        let workB = parseInt(document.getElementById("B-work").textContent);
        let workC = parseInt(document.getElementById("C-work").textContent);
      
        // Lấy thông tin Finish từ HTML
        let finish = [false, false, false, false, false]; // Điều này phụ thuộc vào số tiến trình của bạn
    
        // Lấy thông tin Need và Allocation từ HTML và cập nhật Work và Finish
        var j = 0; //Biến cập nhật Work
        for (let i = 0; i < 5; i++) {
            
            let allocationA = parseInt(document.getElementById("P" + i + "_A-all").value);
            let allocationB = parseInt(document.getElementById("P" + i + "_B-all").value);
            let allocationC = parseInt(document.getElementById("P" + i + "_C-all").value);
            
            let needA = parseInt(document.getElementById("P" + i + "_A-need").textContent);
            let needB = parseInt(document.getElementById("P" + i + "_B-need").textContent);
            let needC = parseInt(document.getElementById("P" + i + "_C-need").textContent);
    
            // Kiểm tra xem tiến trình có thể thực hiện không
            if (!finish[i] && needA <= workA && needB <= workB && needC <= workC) {
                // Nếu thỏa điều kiện, thì cập nhật Work và Finish
                workA += allocationA;
                workB += allocationB;
                workC += allocationC;
                finish[i] = true;
            

                // Cập nhật bảng Work với ID được chỉ định
               
                let workElement =document.getElementById(`process${j}`);
                let workAElement = document.getElementById(`process${j}-A`);
                let workBElement = document.getElementById(`process${j}-B`);
                let workCElement = document.getElementById(`process${j}-C`);
                    
                
                if (workElement && workAElement && workBElement && workCElement) { // If dùng để kiểm tra lỗi
                    workElement.textContent = `P${i}`;
                    workAElement.textContent = workA;
                    workBElement.textContent = workB;
                    workCElement.textContent = workC;
                } else {    
                    console.log(`One or more elements with IDs process${i}, process${i}-A, process${i}-B, or process${i}-C not found.` + i);
                }
                j++;
                i = -1; // Bắt đầu lại từ đầu
                      
            }
         
        }
        console.log("OK");
    
        // Kiểm tra xem tất cả tiến trình đã hoàn thành chưa
        const isSafe = finish.every((finished) => finished);
    
        // Cập nhật kết quả lên HTML
        const resultElement = document.querySelector('.text-safe');
        if (isSafe) {
            resultElement.textContent = 'Chuỗi an toàn';
        } else {
            resultElement.textContent = 'Chuỗi không an toàn';
        }
    }


// Hàm để cộng thêm Request vào Allocation cho tiến trình đã chọn
// function addToAllocation() {
//             // Lấy các phần tử HTML
//             const requestSelect = document.getElementById("Request");
//             const requestASelect = document.getElementById("Request-A");
//             const requestBSelect = document.getElementById("Request-B");
//             const requestCSelect = document.getElementById("Request-C");

//         // Lấy giá trị của Request và các giá trị A, B, C tương ứng
//         const selectedProcess = parseInt(requestSelect.value);
//         const requestA = parseInt(requestASelect.value);
//         const requestB = parseInt(requestBSelect.value);
//         const requestC = parseInt(requestCSelect.value);

//         // Lấy giá trị Allocation hiện tại cho tiến trình đã chọn
//         const allocationA = parseInt(document.getElementById(`P${selectedProcess}_A-all`).value);
//         const allocationB = parseInt(document.getElementById(`P${selectedProcess}_B-all`).value);
//         const allocationC = parseInt(document.getElementById(`P${selectedProcess}_C-all`).value);

//         // Cộng giá trị Request vào Allocation
//         document.getElementById(`P${selectedProcess}_A-all`).value = allocationA + requestA;
//         document.getElementById(`P${selectedProcess}_B-all`).value = allocationB + requestB;
//         document.getElementById(`P${selectedProcess}_C-all`).value = allocationC + requestC;
//         RunFunc();
//         // Gắn sự kiện khi nút cộng được bấm
//         // document.getElementById("addToAllocationButton").addEventListener("click", addToAllocation);
          
// }

function addToAllocation() {
    calculateAvailable();
    // Lấy các phần tử HTML
    const requestSelect = document.getElementById("Request");
    const requestASelect = document.getElementById("Request-A");
    const requestBSelect = document.getElementById("Request-B");
    const requestCSelect = document.getElementById("Request-C");

    // Lấy giá trị của Request và các giá trị A, B, C tương ứng
    const selectedProcess = parseInt(requestSelect.value);
    const requestA = parseInt(requestASelect.value);
    const requestB = parseInt(requestBSelect.value);
    const requestC = parseInt(requestCSelect.value);

    // Kiểm tra nếu giá trị mới của Allocation lớn hơn giá trị của Available

    const availableA = parseInt(document.getElementById("A-avail").textContent);
    const availableB = parseInt(document.getElementById("B-avail").textContent);
    const availableC = parseInt(document.getElementById("C-avail").textContent);

    // Lấy giá trị Allocation hiện tại cho tiến trình đã chọn
    const allocationA = parseInt(document.getElementById(`P${selectedProcess}_A-all`).value);
    const allocationB = parseInt(document.getElementById(`P${selectedProcess}_B-all`).value);
    const allocationC = parseInt(document.getElementById(`P${selectedProcess}_C-all`).value);

    // Lấy giá trị Max tiến trình hiện tại
    const MaxA = parseInt(document.getElementById(`P${selectedProcess}_A-max`).value);
    const MaxB = parseInt(document.getElementById(`P${selectedProcess}_B-max`).value);
    const MaxC = parseInt(document.getElementById(`P${selectedProcess}_C-max`).value);

    const resultElement = document.querySelector('.text-safe');
    if (allocationA + requestA > availableA || allocationB + requestB > availableB || allocationC + requestC > availableC) {
        resultElement.textContent = 'Request lớn hơn giá trị Available';
        if(allocationA + requestA > MaxA || allocationB + requestB > MaxB || allocationC + requestC > MaxC){
           
            resultElement.textContent = 'Request lớn hơn giá trị Max';
        }
    } else{
        document.getElementById(`P${selectedProcess}_A-all`).value = allocationA + requestA;
        document.getElementById(`P${selectedProcess}_B-all`).value = allocationB + requestB;
        document.getElementById(`P${selectedProcess}_C-all`).value = allocationC + requestC;
        RunFunc();
    } 
}

    
    function RunFunc(){
        createMatrices();
        calculateNeed();
        calculateAvailable();
        createMatrixWork();
        isSafe();
    }
    
