import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent, IIconConfig } from './icon.component';

describe('FooterComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IconComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        const config: IIconConfig = {
            fontFamily:'fa-brands',
            unicode: 'e027'
        }
        component.iconConfig = config,
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
