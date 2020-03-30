import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {
  private currentPermissions: string[] = [];
  private permissions = [];
  private logicalOp = 'AND';
  private isHidden = true;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authStorageService: AuthStorageService
  ) {

  }

  ngOnInit() {
    this.currentPermissions = this.authStorageService.getPermissions();
    this.updateView();
  }

  @Input()
  set hasPermission(val) {
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set hasPermissionOp(permop) {
    this.logicalOp = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  existPermission(permission: string): string {
    return this.currentPermissions.find(x => x.toUpperCase() === permission.toUpperCase());
  }

  private checkPermission() {
    if (this.currentPermissions) {
      console.log(this.permissions);
      if (this.logicalOp === 'OR') {
        return this.permissions.some((permission) => this.existPermission(permission));
      } else {
        return this.permissions.every((permission) => this.existPermission(permission));
      }
    }
  }
}
