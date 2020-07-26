[![Build status](https://ci.appveyor.com/api/projects/status/c89tgks4m4m60h56?svg=true)](https://ci.appveyor.com/project/MKSInc/ajs-hw-10-async-2-async-await)

# 10. Домашнее задание к лекции «Promises, async/await»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## 10.2 `async/await`

### Легенда

Вы устали от бесконечной цепочки `.then().then().catch()` и решили перейти на `async/await`.

### Описание

Перепишите предыдущую задачу с использованием `async/await`. Не забудьте про `try-catch` для отлова ошибок. Для этого используйте async IIFE (модуль `app.js`):
```javascript
(async () => {
  // Your code here with await
})();
```
