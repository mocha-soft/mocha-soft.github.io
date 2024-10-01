let selectedFlags = {};

function main() {
    if (latte_flags)
        displayJSONData(latte_flags);

    document.getElementById('download_btn').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedFlags, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "selected_flags.json");
        downloadAnchor.click();
    });
}

function displayJSONData(data) {
    const contentDiv = document.getElementById('json-content');

    for (const section in data) {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section;

        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section', 'collapsed');
        sectionDiv.style.height = '0';

        sectionTitle.addEventListener('click', () => {
            const isCollapsed = sectionDiv.classList.toggle('collapsed');
            sectionDiv.classList.toggle('expanded', !isCollapsed);
            sectionDiv.style.height = (isCollapsed) ? '0' : sectionDiv.scrollHeight + 'px';
        });

        contentDiv.appendChild(sectionTitle);
        contentDiv.appendChild(sectionDiv);

        data[section].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);

            if (item.description) {
                const itemDesc = document.createElement('p');

                let description = item.description;
                description = description.replace(/CAUTION:/g, '<span class="caution">CAUTION:</span>');
                description = description.replace(/IMPORTANT:/g, '<span class="important">IMPORTANT:</span>');
                description = description.replace(/NOTE:/g, '<span class="note">NOTE:</span>');
                description = description.replace(/TIP:/g, '<span class="tip">TIP:</span>');

                itemDesc.innerHTML = description; 
                itemDiv.appendChild(itemDesc);
            }

            const flagsDiv = document.createElement('div');
            flagsDiv.classList.add('flags');

            const flagsList = document.createElement('ul');
            let flagItems = [];

            const flags = item.flags;
            const flagKeys = Object.keys(flags);
            flagKeys.forEach((flag, index) => {
                let flagText = `${flag}: ${flags[flag]}`;
                if (index < flagKeys.length - 1)
                    flagText += ',<br>';

                flagItems.push(flagText);
            });

            const flagItem = document.createElement('li');
            flagItem.classList.add('flags');
            flagItem.innerHTML = flagItems.join('');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${item.name}-flaglist`;
            checkbox.addEventListener('change', () => handleFlagListChange(flags, checkbox.checked));
            
            flagsList.appendChild(flagItem);
            flagsDiv.appendChild(flagsList);
            flagsDiv.appendChild(checkbox);
            itemDiv.appendChild(flagsDiv);

            sectionDiv.appendChild(itemDiv);
        });
    }
}

function handleFlagListChange(flags, isChecked) {
    const flagKeys = Object.keys(flags);

    if (isChecked) {
        flagKeys.forEach(flag => {
            selectedFlags[flag] = flags[flag];
        });
    } else {
        flagKeys.forEach(flag => {
            delete selectedFlags[flag];
        });
    }
}

main();
