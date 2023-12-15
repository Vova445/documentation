import React from 'react';

const OpenCLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        OpenCL (Open Computing Language) - це рамка для написання програм, які використовують різні обчислювальні пристрої, такі як центральні процесори (CPU) та відеокарти (GPU).
      </p>
      <p>
        <strong>Застосування OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Паралельні обчислення:</strong> OpenCL дозволяє використовувати потужність кількох обчислювальних пристроїв одночасно для розпаралеленого виконання завдань.</li>
        <li><strong>Взаємодія з різними пристроями:</strong> Програми, написані на OpenCL, можуть взаємодіяти з різними пристроями, що розширює їхню універсальність.</li>
        <li><strong>Оптимізація продуктивності:</strong> Розподіл завдань між CPU та GPU дозволяє досягти оптимальної продуктивності для різних видів обчислень.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        OpenCL широко використовується в області наукових досліджень, графіки, криптографії та інших обчислювальних завдань.
      </p>
      <p>
        <strong>Де вчити OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація:</strong> <a href="https://www.khronos.org/opencl/" target="_blank" rel="noopener noreferrer" style={{ color: 'gold' }}>OpenCL Documentation</a></li>
        <li><strong>Курси на Udacity:</strong> <a href="https://www.udacity.com/course/intro-to-computer-vision--ud810" target="_blank" rel="noopener noreferrer" style={{ color: 'gold' }}>Introduction to Computer Vision</a></li>
      </ul>
      <p>
        <strong>Унікальні риси OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Підтримка різних пристроїв:</strong> OpenCL може працювати на різних обчислювальних пристроях, дозволяючи ефективно використовувати їх ресурси.</li>
        <li><strong>Портативність:</strong> Програми, написані на OpenCL, можуть запускатися на різних платформах без необхідності перекомпіляції.</li>
      </ul>
      <p>
        OpenCL відіграє ключову роль у високопродуктивних обчисленнях та розподіленому обчисленні.
      </p>
    </>
  ) : (
    <>
      <p>
        OpenCL (Open Computing Language) is a framework for writing programs that execute across various computational devices such as Central Processing Units (CPUs) and Graphics Processing Units (GPUs).
      </p>
      <p>
        <strong>Applications of OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Parallel Computing:</strong> OpenCL enables the use of the computational power of multiple devices simultaneously for parallel execution of tasks.</li>
        <li><strong>Interaction with Various Devices:</strong> Programs written in OpenCL can interact with various devices, enhancing their versatility.</li>
        <li><strong>Performance Optimization:</strong> Task distribution between CPU and GPU allows achieving optimal performance for different types of computations.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        OpenCL is widely used in scientific research, graphics, cryptography, and other computational tasks.
      </p>
      <p>
        <strong>Where to Learn OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Official Documentation:</strong> <a href="https://www.khronos.org/opencl/" target="_blank" rel="noopener noreferrer" style={{ color: 'gold' }}>OpenCL Documentation</a></li>
        <li><strong>Udacity Courses:</strong> <a href="https://www.udacity.com/course/intro-to-computer-vision--ud810" target="_blank" rel="noopener noreferrer" style={{ color: 'gold' }}>Introduction to Computer Vision</a></li>
      </ul>
      <p>
        <strong>Unique Features of OpenCL:</strong>
      </p>
      <ul>
        <li><strong>Support for Various Devices:</strong> OpenCL can work on different computational devices, allowing efficient utilization of their resources.</li>
        <li><strong>Portability:</strong> Programs written in OpenCL can run on various platforms without the need for recompilation.</li>
      </ul>
      <p>
        OpenCL plays a crucial role in high-performance computing and distributed computing.
      </p>
    </>
  );
  return content;
};

export default OpenCLModalContent;
