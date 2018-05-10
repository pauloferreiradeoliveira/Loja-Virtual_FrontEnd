import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CategoriaComponent } from "./categoria.component";
import { VisualicacaoComponent } from "./visualicacao/visualicacao.component";
import { CategoriasResolver } from "./guard/categorias.resolver";
import { FormularioCategoriaComponent } from "./formularioCategoria/formularioCategoria.component";

const routesAdmin: Routes = [
  {
    path: "",
    component: CategoriaComponent,
    children: [
      {
        path: "novo",
        component: FormularioCategoriaComponent
      },
      {
        path: ":id",
        component: VisualicacaoComponent,
        resolve: { cadegoria: CategoriasResolver }
      },
      {
        path: ":id/editar",
        component: FormularioCategoriaComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class CategoriaRoutes {}
