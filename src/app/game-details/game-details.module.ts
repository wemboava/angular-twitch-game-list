import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GameDetailsComponent } from './game-details.component';
// import { ArticleResolver } from './article-resolver.service';
import { SharedModule } from '../shared/shared.module'

const gameDetailsRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'game/:id',
        component: GameDetailsComponent,
        // resolve: {
        //     article: ArticleResolver
        // }
    }
])

@NgModule({
    imports: [
        SharedModule,
        gameDetailsRouting,
    ],
    declarations: [
        GameDetailsComponent,
    ]

//   providers: [
//     ArticleResolver
//   ]
})
export class GameDetailsModule {}