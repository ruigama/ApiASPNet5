﻿using System.ComponentModel.DataAnnotations;

namespace Filmes.Data.Dtos.FornecedorDto
{
    public class UpdateFornecedorDto
    {
        [Required(ErrorMessage = "O nome é obrigatório")]
        public string Nome { get; set; }

        [StringLength(14, ErrorMessage = "O CNPJ deve conter até 14 caracteres")]
        public string Cpnj { get; set; }

        [Required(ErrorMessage = "O email é obrigatório.")]
        public string Email { get; set; }

        [StringLength(11, ErrorMessage = "O telefone não pode conter mais que 11 digitos.")]
        public string Telefone { get; set; }

        public string Endereco { get; set; }

        public int Numero { get; set; }

        public string Complemento { get; set; }

        public string Bairro { get; set; }

        public string Cidade { get; set; }

        [StringLength(2, ErrorMessage = "Usar abreviação do estado.")]
        public string Uf { get; set; }

        [Required(ErrorMessage = "O CEP é obrigatório")]
        public string Cep { get; set; }

        public string Observacoes { get; set; }
    }
}
