function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'json';

    xhr.onload = function () {
        if (xhr.status == 200) {
            callback(xhr.response);
        } else {
            alert('Something Wrong!!');
        }
    };
    xhr.send();
}

//for...of get content
//for...in get index

function render(data) {
    let title = [];
    for (let i of data) {
        for (let j in i) {
            if (!title.includes(j)) {
                title.push(j);
            }
        }
    }
    //console.log(title);


    let thead = document.getElementById('thead');
    let trh = document.createElement('tr');
    for (let k of title) {
        let th = document.createElement('th');
        th.textContent = k;
        trh.appendChild(th);
    }
    thead.appendChild(trh);

    let tbody = document.getElementById("tbody");
    for (let content of data) {
        let trb = document.createElement("tr");
        for (let item of title) {
            let td = document.createElement("td");
            console.log(item);
            td.textContent = content.hasOwnProperty(item) ? content[item] : "";
            trb.appendChild(td);
        }
        tbody.appendChild(trb);
    }
    console.log(tbody);
}


ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function (response) {
    render(response);
}); // you should get product information in JSON format and render data in the page 