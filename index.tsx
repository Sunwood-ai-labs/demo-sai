/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

const dice = document.getElementById('dice') as HTMLDivElement | null;
const rollButton = document.getElementById('roll-button') as HTMLButtonElement | null;
const diceWrapper = document.getElementById('dice-wrapper') as HTMLDivElement | null;

if (dice && rollButton && diceWrapper) {
    const getRandomFace = (): number => {
      return Math.floor(Math.random() * 6) + 1;
    };
    
    const updateDiceFace = (face: number): void => {
        // すべてのfaceクラスをリセット
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove(`face-${i}`);
        }
        // 新しいfaceクラスを追加
        dice.classList.add(`face-${face}`);
        diceWrapper.setAttribute('aria-label', `サイコロの目は${face}です`);
    };

    const rollDice = (): void => {
        rollButton.disabled = true;
        dice.classList.add('rolling');

        // アニメーションが終わるのを待つ
        setTimeout(() => {
            dice.classList.remove('rolling');
            const newFace = getRandomFace();
            updateDiceFace(newFace);
            rollButton.disabled = false;
        }, 1000); // CSSのアニメーション時間と一致させる
    };

    // 初期表示としてランダムな目を設定
    updateDiceFace(getRandomFace());
    rollButton.addEventListener('click', rollDice);

} else {
    console.error('必要な要素（dice, roll-button, または dice-wrapper）が見つかりませんでした。');
}
