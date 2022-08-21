using System.ComponentModel.DataAnnotations;

namespace Filmes.Models
{
    public class Filme
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo título é obrigatório")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "O campo Diretor é obrigatório")]
        public string Diretor { get; set; }
        [StringLength(30, ErrorMessage = "O título não deve possuir mais de 30 caracteres.")]
        public string Genero { get; set; }
        [Range(1, 300, ErrorMessage = "A duração deve ter no mínimo 1 minuto e máximo de 300 minutos.")]
        public int Duracao { get; set; }

        public string Ator { get; set; }
        
    }
}
