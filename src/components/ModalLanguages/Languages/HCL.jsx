import React from 'react';

const HCLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        HCL (HashiCorp Configuration Language) - це мова конфігурації, розроблена компанією HashiCorp, яка використовується для визначення інфраструктури в коді.
      </p>
      <p>
        <strong>Застосування HCL:</strong>
      </p>
      <ul>
        <li><strong>Декларативний синтаксис:</strong> HCL надає зручний декларативний спосіб визначення інфраструктурних ресурсів.</li>
        <li><strong>Легкість читання та написання:</strong> Синтаксис HCL призначений для того, щоб бути зрозумілим та легко читати і писати.</li>
        <li><strong>Використання в інструментах HashiCorp:</strong> HCL широко використовується в інструментах, таких як Terraform, Packer, Consul, тощо.</li>
      </ul>
      <p>
        <strong>Де вчити HCL:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Terraform:</strong> <a href="https://www.terraform.io/docs/language/index.html" target="_blank" rel="noopener noreferrer">Terraform HCL Documentation</a></li>
        <li><strong>Інтерактивний посібник від HashiCorp:</strong> <a href="https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/configuration-language" target="_blank" rel="noopener noreferrer">Interactive Guide to Terraform HCL</a></li>
      </ul>
      <p>
        HCL грає важливу роль у розробці інфраструктури відповідно до коду, забезпечуючи легкість управління та визначення конфігурації.
      </p>
    </>
  ) : (
    <>
      <p>
        HCL (HashiCorp Configuration Language) is a configuration language developed by HashiCorp, used for defining infrastructure as code.
      </p>
      <p>
        <strong>Key Features of HCL:</strong>
      </p>
      <ul>
        <li><strong>Declarative Syntax:</strong> HCL provides a convenient declarative way to define infrastructure resources.</li>
        <li><strong>Readability and Writability:</strong> HCL syntax is designed to be easily understandable and writable.</li>
        <li><strong>Utilized in HashiCorp Tools:</strong> HCL is widely used in tools such as Terraform, Packer, Consul, and more.</li>
      </ul>
      <p>
        <strong>Where to Learn HCL:</strong>
      </p>
      <ul>
        <li><strong>Official Terraform Documentation:</strong> <a href="https://www.terraform.io/docs/language/index.html" target="_blank" rel="noopener noreferrer">Terraform HCL Documentation</a></li>
        <li><strong>HashiCorp Interactive Guide:</strong> <a href="https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/configuration-language" target="_blank" rel="noopener noreferrer">Interactive Guide to Terraform HCL</a></li>
      </ul>
      <p>
        HCL plays a vital role in infrastructure development, providing ease of management and configuration definition.
      </p>
    </>
  );
  return content;
};

export default HCLModalContent;
