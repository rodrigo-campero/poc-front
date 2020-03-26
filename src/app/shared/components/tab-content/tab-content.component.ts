import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnChanges, OnDestroy, Type, ViewChild } from '@angular/core';
import { of, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { DynamicTabContentDirective } from '../../directives/dynamic-tab-content.directive';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(DynamicTabContentDirective, { static: true }) target: DynamicTabContentDirective;
  @Input() component: Type<Component>;
  @Input() data: any;
  @Input() active: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();

  componentRef: ComponentRef<Component>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.componentRef = this.target.viewContainerRef.createComponent(factory);
    const instance: any = this.componentRef.instance as any;
    instance.data = this.data;
    console.log(this.active);
    of(this.active).pipe(
      delay(1000),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      instance.tabActive = this.active;
    });
    this.componentRef.changeDetectorRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
