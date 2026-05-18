/**
 * 剧情标签切换功能
 * 采用模块化思想，将交互逻辑封装，便于维护和扩展
 */
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有标签按钮和内容块
    const tabButtons = document.querySelectorAll('.story-tabs__button');
    const contentBlocks = document.querySelectorAll('.story-content__block');

    // 为每个标签按钮添加点击事件监听器
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取目标内容块的ID
            const targetId = this.dataset.target;

            // 移除所有按钮的激活状态
            tabButtons.forEach(btn => btn.classList.remove('story-tabs__button--active'));
            // 为当前点击的按钮添加激活状态
            this.classList.add('story-tabs__button--active');

            // 隐藏所有内容块
            contentBlocks.forEach(block => block.classList.remove('story-content__block--active'));
            // 显示目标内容块
            document.getElementById(targetId).classList.add('story-content__block--active');
        });
    });
});
