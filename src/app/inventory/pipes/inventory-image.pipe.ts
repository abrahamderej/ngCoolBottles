import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inventoryImage',
})
export class InventoryImagePipe implements PipeTransform {
  private defaultImage =
    'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807';

  transform(value: string | undefined | null): string {
    return value || this.defaultImage;
  }
}

//falsy false, 0, undefined, null
