import React from 'react';

const VerilogModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Verilog - це мова опису апаратного забезпечення (HDL), використовувана для моделювання та синтезу інтегральних схем. Вона широко використовується для проектування цифрових схем та інтегральних мікросхем.
      </p>
      <p>
        <strong>Застосування Verilog:</strong>
      </p>
      <ul>
        <li><strong>Цифровий Дизайн:</strong> Verilog використовується для моделювання та проектування цифрових схем.</li>
        <li><strong>Синтез Інтегральних Схем:</strong> Verilog дозволяє синтезувати цифрові дизайни в реальні інтегральні схеми.</li>
        <li><strong>Верифікація Цифрових Схем:</strong> Використання Verilog для верифікації правильності цифрових дизайнів.</li>
        <li><strong>Тестування Інтегральних Мікросхем:</strong> Використання Verilog для тестування виготовлених інтегральних мікросхем.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Verilog використовується для розробки цифрових дизайнів та моделювання інтегральних схем у сфері електроніки.
      </p>
      <p>
        <strong>Де Вчити Verilog:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Verilog:</strong> <a href="https://www.verilog.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Verilog Documentation</a></li>
        <li><strong>Online Verilog Compiler:</strong> <a href="https://www.tutorialspoint.com/compile_verilog_online.php" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Online Verilog Compiler</a></li>
      </ul>
      <p>
        <strong>Особливості Verilog:</strong>
      </p>
      <ul>
        <li><strong>Мова Опису Апаратного Забезпечення:</strong> Verilog призначений для опису цифрових схем та систем.</li>
        <li><strong>Синтаксис Мови HDL:</strong> Має синтаксис, орієнтований на опис апаратного забезпечення.</li>
        <li><strong>Моделювання Та Синтез Цифрових Дизайнів:</strong> Дозволяє моделювати та синтезувати цифрові дизайни.</li>
      </ul>
      <p>
        Verilog - важливий інструмент для інженерів, які займаються цифровим дизайном та проектуванням інтегральних схем.
      </p>
    </>
  ) : (
    <>
      <p>
        Verilog is a hardware description language (HDL) used for modeling and synthesizing digital circuits. It is widely used for designing digital circuits and integrated circuits.
      </p>
      <p>
        <strong>Applications of Verilog:</strong>
      </p>
      <ul>
        <li><strong>Digital Design:</strong> Verilog is used for modeling and designing digital circuits.</li>
        <li><strong>Integrated Circuit Synthesis:</strong> Verilog allows the synthesis of digital designs into actual integrated circuits.</li>
        <li><strong>Digital Circuit Verification:</strong> Using Verilog to verify the correctness of digital designs.</li>
        <li><strong>Integrated Circuit Testing:</strong> Using Verilog for testing manufactured integrated circuits.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Verilog is used for developing digital designs and modeling integrated circuits in the field of electronics.
      </p>
      <p>
        <strong>Where to Learn Verilog:</strong>
      </p>
      <ul>
        <li><strong>Official Verilog Documentation:</strong> <a href="https://www.verilog.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Verilog Documentation</a></li>
        <li><strong>Online Verilog Compiler:</strong> <a href="https://www.tutorialspoint.com/compile_verilog_online.php" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Online Verilog Compiler</a></li>
      </ul>
      <p>
        <strong>Features of Verilog:</strong>
      </p>
      <ul>
        <li><strong>Hardware Description Language:</strong> Verilog is designed for describing hardware.</li>
        <li><strong>HDL Syntax:</strong> It has syntax oriented towards hardware description.</li>
        <li><strong>Modeling and Synthesis of Digital Designs:</strong> Allows modeling and synthesizing digital designs.</li>
      </ul>
      <p>
        Verilog is a crucial tool for engineers involved in digital design and integrated circuit design.
      </p>
    </>
  );

  return content;
};

export default VerilogModalContent;
