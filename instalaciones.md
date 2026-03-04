dotnet new sln -n FulSpectrum

dotnet new webapi -n FulSpectrum.Api
dotnet new classlib -n FulSpectrum.Application
dotnet new classlib -n FulSpectrum.Domain
dotnet new classlib -n FulSpectrum.Infrastructure
Agregar proyectos a la solución
dotnet sln add FulSpectrum.Api/FulSpectrum.Api.csproj
dotnet sln add FulSpectrum.Application/FulSpectrum.Application.csproj
dotnet sln add FulSpectrum.Domain/FulSpectrum.Domain.csproj
dotnet sln add FulSpectrum.Infrastructure/FulSpectrum.Infrastructure.csproj
Referencias entre capas
dotnet add FulSpectrum.Api reference FulSpectrum.Application
dotnet add FulSpectrum.Application reference FulSpectrum.Domain
dotnet add FulSpectrum.Infrastructure reference FulSpectrum.Application
dotnet add FulSpectrum.Infrastructure reference FulSpectrum.Domain
dotnet add FulSpectrum.Api reference FulSpectrum.Infrastructure
📦 Paquetes NuGet instalados
Logging
dotnet add FulSpectrum.Api package Serilog.AspNetCore
dotnet add FulSpectrum.Api package Serilog.Sinks.Console
dotnet add FulSpectrum.Api package Serilog.Sinks.File
dotnet add FulSpectrum.Api package Serilog.Enrichers.Environment
dotnet add FulSpectrum.Api package Serilog.Enrichers.Thread
API Versioning
dotnet add FulSpectrum.Api package Asp.Versioning.Mvc
dotnet add FulSpectrum.Api package Asp.Versioning.ApiExplorer
Swagger
dotnet add FulSpectrum.Api package Swashbuckle.AspNetCore
Health Checks
dotnet add FulSpectrum.Api package Microsoft.Extensions.Diagnostics.HealthChecks
dotnet add FulSpectrum.Api package AspNetCore.HealthChecks.UI.Client
Entity Framework Core + SQL Server
dotnet add FulSpectrum.Infrastructure package Microsoft.EntityFrameworkCore
dotnet add FulSpectrum.Infrastructure package Microsoft.EntityFrameworkCore.SqlServer
dotnet add FulSpectrum.Infrastructure package Microsoft.EntityFrameworkCore.Design
🔐 User Secrets (Development)
cd FulSpectrum.Api
dotnet user-secrets init

dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost;Database=FulSpectrumDb;Trusted_Connection=True;TrustServerCertificate=True;"
dotnet user-secrets set "Jwt:Issuer" "FulSpectrum"
dotnet user-secrets set "Jwt:Audience" "FulSpectrum"
dotnet user-secrets set "Jwt:Key" "DEV_ONLY_super_secret_change_me"
🎨 Frontend (Vite + React + TypeScript)
Crear proyecto
npm create vite@latest fulspectrum-web -- --template react-ts
Instalar dependencias
cd fulspectrum-web
npm install
Router
npm install react-router-dom
🎨 TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
🧹 Formateo y calidad de código
Prettier
npm install -D prettier
ESLint + compatibilidad con Prettier
npm install -D eslint-config-prettier

(Vite ya incluye ESLint base para React + TypeScript)

🧪 Comandos para ejecutar el proyecto
Backend
cd FulSpectrum.Api
dotnet run
Frontend
cd fulspectrum-web
npm run dev