import React from 'react'

const ThemeSetting = ({ childRef, click }) => {

    const doSomething = () => {
        // Thực hiện các thao tác cần thiết
        // const testEL = document.querySelector('.test');
        childRef.current.classList.add('show'); 

        console.log(childRef.current); 
        // Ví dụ: Gọi một callback từ component cha
    };

    const handleClick = () => {
        click('10diem');
    }
    

    return (
        <div ref={childRef} className="test" onClick={doSomething}>
            <button onClick={handleClick}>Click</button>
            <div>Modal</div>
        </div>
    )
};

export default ThemeSetting