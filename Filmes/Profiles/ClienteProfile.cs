using AutoMapper;
using Clientes.Models;
using Filmes.Data.Dtos.ClienteDto;

namespace Clientes.Profiles
{
    public class ClienteProfile : Profile
    {
        public ClienteProfile()
        {
            CreateMap<CreateClienteDto, Cliente>();
            CreateMap<Cliente, ReadClienteDto>();
            CreateMap<UpdateClienteDto, Cliente>();
        }
    }
}
