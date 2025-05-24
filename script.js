// 简单的表单提交交互，仿苹果官网风格

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('感谢您的留言！我们会尽快与您联系。');
      form.reset();
    });
  }
}); 