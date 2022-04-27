function formatCpf(cpf: string) {
  const cpfFormated = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4',
  );
  return cpfFormated;
}

export default formatCpf;
