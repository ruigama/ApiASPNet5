using AutoMapper;
using Filmes.Data.Dtos.FornecedorDto;
using Fornecedores.Models;

namespace Filmes.Profiles
{
    public class FornecedorProfile : Profile
    {
        public FornecedorProfile()
        {
            CreateMap<CreateFornecedorDto, Fornecedor>();
            CreateMap<Fornecedor, ReadFornecedorDto>();
            CreateMap<UpdateFornecedorDto, Fornecedor>();
        }
    }
}
