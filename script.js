document.addEventListener('DOMContentLoaded', () => {
    const likesList = document.querySelectorAll('.likes-container li');
    const container = document.querySelector('.likes-container');

   
    if (!container || likesList.length === 0) {
        console.error('likes-container 또는 li 없음');
        return;
    }

    const messages = {
        '야구': '두산 베어스 팬입니다. 현재 연세 이글스에서 활동하고 있습니다',
        '잠자기': '잠을 적게 자면 많이 예민합니다...',
        '축구': '축구를 뛰는 순간에는 고민 없이 열심히 뛸 수 있어 행복합니다!'
    };

   
    const messageDisplay = document.createElement('div');
    messageDisplay.id = 'dynamic-message';

   
    messageDisplay.style.marginTop = '15px';
    messageDisplay.style.padding = '12px';
    messageDisplay.style.borderRadius = '10px';
    messageDisplay.style.textAlign = 'center';
    messageDisplay.style.fontWeight = 'bold';
    messageDisplay.style.backgroundColor = '#f0f8ff';
    messageDisplay.style.transition = 'all 0.3s ease';

    container.appendChild(messageDisplay);

    likesList.forEach(item => {
        item.style.cursor = 'pointer';

        item.addEventListener('click', () => {
            const hobby = item.innerText.trim(); 

       
            likesList.forEach(li => li.style.color = 'black');
            item.style.color = '#007bff';

            messageDisplay.innerText = messages[hobby];
           
            messageDisplay.animate([
                { transform: 'translateY(10px)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ], { duration: 300 });
        });
    });
});